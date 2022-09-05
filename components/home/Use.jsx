/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import anime from 'animejs';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    props: PropTypes.shape().isRequired,
    children: PropTypes.node.isRequired,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
function animation(target) {
    anime({
        targets: target
            ? document.querySelector(`#${target}`)
            : '#simple-tabpanel-0',
        translateX: 250,
        direction: 'reverse',
        easing: 'easeInOutSine',
    });
}
class Use extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, newValue) {
        this.setState({ value: newValue });
        animation(`simple-tabpanel-${event.target.id.slice(-1)}`);
    }

    render() {
        const { value } = this.state;
        return (
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        aria-label="basic tabs example"
                        c
                    >
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel
                    value={value}
                    index={0}
                    className={`animation-${value}`}
                >
                    Item One
                </TabPanel>
                <TabPanel
                    value={value}
                    index={1}
                    className={`animation-${value}`}
                >
                    Item Two
                </TabPanel>
                <TabPanel
                    value={value}
                    index={2}
                    className={`animation-${value}`}
                >
                    Item Three
                </TabPanel>
            </Box>
        );
    }
}
export default Use;
