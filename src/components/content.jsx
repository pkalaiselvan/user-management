import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { removeUser } from '../actions'

function Content(props) {
    const user = (Array.isArray(props.users) && props.users.find(user => user.login.uuid === props.activeUser)) || {}

    const data = []

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
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <img src={user.picture.large} alt={user.picture.large} />
                </Grid>
                <Grid item xs={12}>
                    {`Name : ${user.name.title} ${user.name.first} ${user.name.last}`}
                </Grid>
                {data}
            </Grid>
        </Paper>
    );
}


const mapStateToProps = state => ({
    users: state.global.users,
    activeUser: state.global.activeUser,
})

const mapDispatchToProps = dispatch => ({
    removeUser: bindActionCreators(removeUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
