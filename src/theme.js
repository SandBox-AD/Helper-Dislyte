import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
const purple = {
  cardinal: '#C1273C',
  palatinate: '#640C50',
  pansy: '#7b186',
  jazzberry: '#901C4E',
  persian: '#3C096C',
  indigo: '#410A69',
  blueVioletWheel: '#460A65',
}
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: purple.jazzberry,
    },
    secondary: {
      main: purple.cardinal,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: purple.persian,
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
          background: purple.palatinate,
          '&.Mui-selected': {
            background: purple.palatinate,
          },
          '&:hover': {
            background: purple.cardinal,
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
          },
        },
        {
          props: {
            variant: 'blueVioletWheel',
          },
          style: {
            background: purple.blueVioletWheel,
          },
        },
      ],
    },
  },
})

export default theme
