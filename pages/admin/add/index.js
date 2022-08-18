/**
 * Import react and nextjs
 */
import React, {
    useState,
} from "react";
import { useUser } from '@auth0/nextjs-auth0';
//Import mui
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Drawer, Box, CssBaseline, Toolbar, IconButton, Typography, Badge, Divider, List, ListItemButton, ListItemIcon, ListItemText, Container, Grid, Copyright, Paper,} from '@mui/material';
import { Notifications, ChevronLeft, Menu, ShoppingCart, People, Layers, Assignment, BarChartRounded } from '@mui/icons-material';
//Import perso
import Dashboard from "../../../components/Admin/Dashboard";
import { mainListItems, secondaryListItems } from "../../../components/Admin/listitem";

export async function getStaticProps() {
    const [esperRes, reliqueRes] = await Promise.all([
        fetch("http://localhost:8080/api/espers"), 
        fetch("http://localhost:8080/api/reliques")
      ]);
    const [espers, reliques] = await Promise.all([
    esperRes.json(), 
    reliqueRes.json()
    ]);
    return { props: { espers, reliques } };
}
const drawerWidth = 240;

const MuiAppBar = styled(AppBar, {
        shouldForwardProp: (prop => prop !== 'open'),
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));
const MuiDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            '& .MuiDrawer-paper': {
                position: 'relative',
                whiteSpace: 'nowrap',
                width: drawerWidth,
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                boxSizing: 'border-box',
                ...(!open && {
                    overflowX: 'hidden',
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                    width: theme.spacing(7),
                    [theme.breakpoints.up('sm')]: {
                        width: theme.spacing(9),
                    },
                }),
            },
        }),
    );
const mdTheme = createTheme();
export default function Admin({espers, reliques}) {
    const { user, error } = useUser();
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return user &&(
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <MuiAppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{ pr: '24px', }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{ marginRight: '36px', ...(open && { display: 'none' }), }}>
                            <Menu />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}>
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <Notifications />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </MuiAppBar>
                <MuiDrawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}>
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeft />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {secondaryListItems}
                    </List>
                </MuiDrawer>
                <Box component="main" sx={{ backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900], flexGrow: 1, height: '100vh', overflow: 'auto', }}>
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Dashboard data={{ espers, reliques }} user={ user} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}