import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { getUserList } from '../actions'
function Header(props) {
    const getUsers = async () => {
        await props.getUserList();
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color='transparent' position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'start', zIndex: '1' }}>
                        {Array.isArray(props.users) ? `# Users : ${props.users.length}` : `# Users : 0`}
                    </Typography>
                    <Button onClick={getUsers} color="primary" variant='outlined'>Get Users</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

const mapStateToProps = state => ({
    users: state.global.users,
})

const mapDispatchToProps = dispatch => ({
    getUserList: bindActionCreators(getUserList, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
