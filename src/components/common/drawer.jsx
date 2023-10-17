import { AccountBoxOutlined, AccountTree, CardGiftcard, ChevronRight, DashboardRounded, Expand, ExpandLess, ExpandMore, HelpOutline, HexagonOutlined, Inbox, Insights, TokenOutlined, ViewInAr, ViewInArOutlined } from '@mui/icons-material';
import { AppBar, Avatar, Box, Collapse, CssBaseline, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../screen/dashboard';

function DrawerComponent(props) {
    const drawerWidth = 240;
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => { setMobileOpen(!mobileOpen); };
    const container = window !== undefined ? () => window().document.body : undefined;
    const drawer = (
        <>
            <List sx={{ bgcolor: '#14224d' }}>
                {/* <Grid container > */}
                <Grid item display='flex' mt={2}>
                    <IconButton sx={{ ml: 1.8 }}> <TokenOutlined style={{ fontSize: '30px', fill: 'white' }} /></IconButton>
                    <Typography fontWeight='bold' alignSelf='center' variant='h6' color='white'>Dashboard</Typography>
                </Grid>
                {/* </Grid> */}
                <Grid container display='flex' minHeight='89.5vh' flexDirection='column' justifyContent='space-between'>

                    <Grid item mt={2} >
                        <ListItem disablePadding sx={{ p: 0.5 }}>
                            <ListItemButton sx={{ bgcolor: '#2e308c', borderRadius: 2.8 }}>
                                <IconButton>  <DashboardRounded sx={{ fill: '#dcded9' }} /></IconButton>
                                <ListItemText primary='Dashboard' sx={{ color: '#b5b8b2' }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton >
                                <IconButton>  <ViewInArOutlined sx={{ fill: '#dcded9' }} /></IconButton>
                                <ListItemText primary='Product' sx={{ color: '#dcded9' }} />
                                <IconButton> <ChevronRight fontSize='small' sx={{ fill: '#b5b8b2' }} /></IconButton>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <IconButton><AccountBoxOutlined sx={{ fill: '#dcded9' }} /></IconButton>
                                <ListItemText primary='Customers' sx={{ color: '#dcded9' }} />
                                <IconButton> <ChevronRight fontSize='small' sx={{ fill: '#b5b8b2' }} /></IconButton>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <IconButton> <AccountTree sx={{ fill: '#dcded9' }} /></IconButton>
                                <ListItemText primary='Income ' sx={{ color: '#dcded9' }} />
                                <IconButton> <ChevronRight fontSize='small' sx={{ fill: '#b5b8b2' }} /></IconButton>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <IconButton> <Insights sx={{ fill: '#dcded9' }} /></IconButton>
                                <ListItemText primary='Promote' sx={{ color: '#dcded9' }} />
                                <IconButton> <ChevronRight fontSize='small' sx={{ fill: '#b5b8b2' }} /></IconButton>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <IconButton> <HelpOutline sx={{ fill: '#dcded9' }} /></IconButton>
                                <ListItemText primary='Help' sx={{ color: '#dcded9' }} />
                                <IconButton > <ChevronRight fontSize='small' sx={{ fill: '#b5b8b2' }} /></IconButton>
                            </ListItemButton>
                        </ListItem>
                    </Grid>
                    <Grid item p={1} mb={4}>
                        <Grid container display='flex' justifyContent='space-between' bgcolor='#5a678f' px={0.3} borderRadius={2}>

                            <Grid item mt={1} display='flex' alignSelf='center' columnGap={1} >
                                <Avatar sx={{ ml: 1, mb: 1 }} />
                                <Grid item alignSelf='center'>
                                    <Typography style={{ lineHeight: '0.6' }} color='#dcded9' fontWeight='bold' variant='body2'>Evano</Typography>
                                    <Typography variant='caption' sx={{ color: '#dcded9' }} fontSize='10px'>Project Manager</Typography>
                                </Grid>
                            </Grid>
                            <IconButton> <ExpandMore sx={{ fill: '#b5b8b2' }} /></IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </List>
        </>
    );
    return (
        <Box sx={{ display: 'flex' }}>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders" >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }} >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: '#f5f7f6', p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }} >
                <Routes>
                    <Route path='/' element={<Dashboard mobileOpen={handleDrawerToggle} />}></Route>
                </Routes>
            </Box>
        </Box>
    )
}
DrawerComponent.propTypes = { window: PropTypes.func, };

export default DrawerComponent;