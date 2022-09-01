import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import theme from '../../src/theme';

export const siteTitleAdmin = 'Dislyte Helper - Administration';
const mdTheme = theme;
export default function Layout({ children }) {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <Navbar />
        {children}
      </Box>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
