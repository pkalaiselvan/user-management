import { getUser as getUserAPI } from '../api'
import { UserActions } from '../reducers'

const addUser = (users) => ({
    type: UserActions.ADD_USER,
    data: users
})

const setUser = (userId) => ({
    type: UserActions.SET_ACTIVE_USER,
    userId
})

const deleteUserDispatcher = (userId) => ({
    type: UserActions.DELETE_USER,
    userId
})

const setDelete = (userId, deleteTime, timeLeft) => ({
    type: UserActions.SET_DELETE_TIMER,
    userId,
    deleteTime,
    timeLeft
})

const undoDelete = (userId) => ({
    type: UserActions.UNDO_DELETE_USER,
    userId
})

export const setDeleteTimer = (userId, deleteTime, timeLeft) => async (dispatch) => {
    dispatch(setDelete(userId, deleteTime, timeLeft))
}

export const undoDeleteUser = (userId, deleteTime, timeLeft) => async (dispatch) => {
    dispatch(undoDelete(userId))
}

export const setActiveUser = (userId) => async (dispatch) => {
    dispatch(setUser(userId))
}

export const deleteUser = (userId) => async (dispatch) => {
    dispatch(deleteUserDispatcher(userId))
}

export const getUserList = () => async (dispatch) => {
    try {
        const response = await getUserAPI();
        dispatch(addUser(response.results))
    } catch (err) {
        console.log(err);
    }
}