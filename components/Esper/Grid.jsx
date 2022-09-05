import React from 'react';
import { Grid, Typography } from '@mui/material';
import anime from 'animejs';
import CardEsper from './Card';

class GridEsper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.children.espers.data,
            status: props.children.espers.status,
            length: props.children.espers.length,
        };
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.animation = this.animation.bind(this);
        this.targetRef = [];
    }

    componentDidMount() {
        const { status } = this.state;
        if (status) {
            // eslint-disable-next-line no-console
            console.log(status);
        }
    }

    animation(index, scale, duration, elasticity) {
        this.targetRef = [''];
        anime.remove(document.getElementById(index));
        anime({
            targets: document.getElementById(index),
            scale,
            duration,
            elasticity,
        });
    }

    mouseEnter(e) {
        this.animation(e.currentTarget.id, 1.2, 800, 400);
    }

    mouseLeave(e) {
        this.animation(e.currentTarget.id, 1.0, 600, 300);
    }

    render() {
        const { data, length } = this.state;
        return (
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {data.map((option, index) => (
                    <Grid
                        item
                        sx={{
                            pointerEvents: 'fill',
                        }}
                        xs={2}
                        sm={4}
                        md={4}
                        id={option.esper}
                        ref={() => {
                            this.targetRef.push(option.esper);
                            return true;
                        }}
                        key={option.id}
                        onMouseEnter={this.mouseEnter}
                        onMouseLeave={this.mouseLeave}
                    >
                        <CardEsper>{option}</CardEsper>
                        <Typography>{`${index + 1}/${length}`}</Typography>
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default GridEsper;
