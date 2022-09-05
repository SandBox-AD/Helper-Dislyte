import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const purple = {
    cardinal: '#C1273C',
    palatinate: '#5A0B57',
    pansy: '#780D42',
    jazzberry: '#901C4E',
    persian: '#3C096C',
    indigo: '#410A69',
    blueVioletWheel: '#460A65',
    background: {
        blueVioletWheel: '#4E1F79',
        byzantium: '#6D195A',
        midnight: '#702670',
        pansy: '#780D42',
        fenchLila: '#8666A3',
    },
};
const background = {
    blueVioletWheel: '#4E1F79',
    byzantium: '#6D195A',
    midnight: '#702670',
    pansy: '#780D42',
    fenchLila: '#8666A3',
    glossyGrape: '#B4A0C6',
    queenPink: '#E8D2D6',
    thistle: '#CCBED8',
    thistle4F: '#4FCCBED8',
    rgb: {
        thistle: '204,190,216',
    },
};
// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: background.glossyGrape,
            contrastText: '#000',
        },
        secondary: {
            main: purple.cardinal,
            contrastText: '#000',
        },
        error: {
            main: red.A400,
        },
        pansy: {
            main: purple.pansy,
            contrastText: '#fff',
        },
        palatinate: {
            main: purple.palatinate,
            constrastText: '#fff',
        },
        background: {
            default: background.thistle,
        },
    },
    components: {
        MuiSelect: {
            defaultProps: {
                variant: 'standard',
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    ':hover.Mui-selected': {
                        background: background.thistle,
                    },
                    ':hover': {
                        background: background.thistle,
                    },
                },
            },
        },
        MuiPaper: {
            variants: [
                {
                    props: {
                        variant: 'purple-indigo',
                    },
                    style: {
                        background: purple.indigo,
                        border: `5px solid ${purple.indigo}`,
                    },
                },
                {
                    props: {
                        variant: 'blueVioletWheel',
                    },
                    style: {
                        background: purple.background.blueVioletWheel,
                    },
                },
                {
                    props: {
                        variant: 'palatinate',
                    },
                    style: {
                        background: purple.palatinate,
                        border: `5px solid ${purple.palatinate}`,
                    },
                },
                {
                    props: {
                        variant: 'bg-blueviolet',
                    },
                    style: {
                        background: purple.background.blueVioletWheel,
                    },
                },
                {
                    props: {
                        variant: 'bg-frenchlila',
                    },
                    style: {
                        background: purple.background.fenchLila,
                    },
                },
                {
                    props: {
                        variant: 'border-palatinate',
                    },
                    style: {
                        border: `5px solid ${purple.palatinate}`,
                    },
                },
                {
                    props: {
                        variant: 'bg-thistle05',
                    },
                    style: {
                        opacity: 0.4,
                    },
                },
            ],
        },
        MuiTable: {
            variants: [
                {
                    props: 'test',
                    style: {
                        background: {
                            default: 'linear-gradient(#fe6b8b, #ff8e53)',
                        },
                    },
                },
            ],
        },
        MuiCard: {
            variants: [
                {
                    props: {
                        variant: 'bg-thistle',
                    },
                    style: {
                        backgroundColor: `#b4a0c6`,
                    },
                },
            ],
        },
    },
    // typography:{

    // }
});

export default theme;
