import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { getUser } from '../actions'
function Header(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color='transparent' position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'start', zIndex: '1' }}>
                        Count
                    </Typography>
                    <Button color="primary" variant='outlined'>Get Users</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    getUser: bindActionCreators(getUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
