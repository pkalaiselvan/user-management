import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Box, Drawer, CssBaseline, List, Typography, ListItem, ListItemText, } from '@mui/material';
import Header from './header'
import Content from './content'
import Countdown from './countdown'
import { setActiveUser } from '../actions'

const drawerWidth = 300;

function Main(props) {

    const selectUser = (userId) => {
        props.setActiveUser(userId)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header />
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Box sx={{ mt: 8, overflow: 'auto' }}>
                    <List>
                        {(Array.isArray(props.users) && props.users.length) ? props.users.map((user) => (
                            <ListItem
                                selected={user.login.uuid === props.activeUser}
                                button
                                key={user.login.uuid} onClick={() => selectUser(user.login.uuid)}>
                                <ListItemText primary={`${user.name.title}. ${user.name.first} ${user.name.last}`} />
                                {user.delete && <Countdown data={user.delete} />}
                            </ListItem>
                        )) : 'No Users'}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ width: '100%', p: 3 }}>
                <Typography paragraph sx={{ mt: 8, mb: 0 }}>
                    <Content />
                </Typography>
            </Box>
        </Box>
    );
}

const mapStateToProps = state => ({
    users: state.global.users,
    activeUser: state.global.activeUser,
})

const mapDispatchToProps = dispatch => ({
    setActiveUser: bindActionCreators(setActiveUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
