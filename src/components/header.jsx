import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { getUserList } from '../actions'

function Header(props) {

    const getUsers = async () => {
        await props.getUserList();
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'white' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'start', zIndex: '1', color: 'black' }}>
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
