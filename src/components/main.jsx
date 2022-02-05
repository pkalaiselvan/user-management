import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Header from './header'
import Content from './content'
import { setActiveUser } from '../actions'

const drawerWidth = 240;

function Main(props) {

    const selectUser = (userId) => {
        props.setActiveUser(userId)
    }

    console.log(props)

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
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {(Array.isArray(props.users) && props.users.length) ? props.users.map((user) => (
                            <ListItem button key={user.login.uuid} onClick={() => selectUser(user.login.uuid)}>
                                <ListItemText primary={`${user.name.title}. ${user.name.first} ${user.name.last}`} />
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
