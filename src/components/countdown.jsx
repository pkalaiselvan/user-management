import React, { useEffect, useState } from "react"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Chip } from '@mui/material';
import { setDeleteTimer, deleteUser } from '../actions'

class Countdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            intervalId: null
        }
    }

    componentDidMount() {
        const { id, finish } = this.props.data
        let start = (new Date()).getTime();
        let seconds = ((finish - start) / 1000).toFixed()
        let intervalId = setInterval((time) => {
            this.setState(
                (prevState) => ({ time: prevState.time - 1 }), () => {
                    const { time } = this.state
                    if (time === 0) {
                        this.deleteUser(id)
                    }
                    this.props.setDeleteTimer(id, finish, time)
                })
        }, 1000);
        this.setState({ time: seconds, intervalId })
    }

    deleteUser = (userId) => {
        this.props.deleteUser(userId)
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }
    render() {
        const { id } = this.props.data
        const { activeUser } = this.props
        return (
            activeUser !== id && <Chip label={`${this.state.time}s`} />
        );
    }

}

const mapStateToProps = state => ({
    activeUser: state.global.activeUser,
})

const mapDispatchToProps = dispatch => ({
    setDeleteTimer: bindActionCreators(setDeleteTimer, dispatch),
    deleteUser: bindActionCreators(deleteUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Countdown);