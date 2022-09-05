import { Component } from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
} from '@mui/material';
import Link from 'next/link';

class CardEsper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            espers: props.children,
        };
    }

    render() {
        const { espers } = this.state;
        return (
            <Card variant="bg-thistle">
                <CardActionArea
                    LinkComponent={Link}
                    component="a"
                    href={`/espers/${encodeURIComponent(espers.id)}`}
                >
                    <CardMedia
                        sizes="small"
                        component="img"
                        image={espers.icone}
                        alt={espers.esper}
                    />
                    <CardContent>
                        <Typography
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            {espers.esper}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}
export default CardEsper;
