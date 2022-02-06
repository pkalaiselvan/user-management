import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Paper, Grid, Button } from '@mui/material';
import { setDeleteTimer, undoDeleteUser } from '../actions'

function Content(props) {
    const user = (Array.isArray(props.users) && props.users.find(user => user.login.uuid === props.activeUser)) || {}

    const data = []
    const deleteUser = (user) => {
        if (user.delete) {
            props.undoDeleteUser(user.login.uuid)
        } else {
            let startTime = new Date()
            startTime.setSeconds(startTime.getSeconds() + 20)
            let timeLeft = ((startTime.getTime() - (new Date()).getTime()) / 1000).toFixed(0)
            props.setDeleteTimer(user.login.uuid, startTime.getTime(), timeLeft)
        }
    }

    for (const [key, value] of Object.entries(user)) {
        if (typeof (value) === 'string') {
            data.push(
                <Grid key={key} item xs={12}>
                    {`${key} : ${value}`}
                </Grid>
            )
        } else {
            for (const [key1, value1] of Object.entries(value)) {
                if (typeof (value1) === 'string') {
                    data.push(
                        <Grid key={`${key}${key1}`} item xs={12}>
                            {`${key}.${key1} : ${value1}`}
                        </Grid>
                    )
                }
            }
        }

    }

    return (
        <Paper sx={{ minHeight: '83vh', display: 'grid', alignContent: 'center' }} elevation={2}>
            <Grid container spacing={3} sx={{ p: 1 }}>
                {Object.entries(user).length ? <>
                    <Grid item xs={12}>
                        <img src={user.picture.large} alt={user.picture.large} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {`Name : ${user.name.title} ${user.name.first} ${user.name.last}`}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button onClick={() => deleteUser(user)} variant="outlined">
                            {(user.delete) ? <>
                                {`Undo Delete (${user.delete.timeLeft}`}
                                <span style={{ textTransform: 'lowercase' }}>s</span>
                                {`)`}
                            </> : 'Delete'}
                        </Button>
                    </Grid>
                    {data}
                </> : <Grid item xs={12}>
                    {'Please select user'}
                </Grid>

                }
            </Grid>
        </Paper>
    );
}


const mapStateToProps = state => ({
    users: state.global.users,
    activeUser: state.global.activeUser,
})

const mapDispatchToProps = dispatch => ({
    setDeleteTimer: bindActionCreators(setDeleteTimer, dispatch),
    undoDeleteUser: bindActionCreators(undoDeleteUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
