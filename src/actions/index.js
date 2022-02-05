import { getUser as getUserAPI } from '../api'
import { UserActions } from '../reducers'

const addUser = (users) => ({
    type: UserActions.ADD_USER,
    data: users
})
export const setActiveUser = (userId) => ({
    type: UserActions.SET_ACTIVE_USER,
    data: userId
})

export const removeUser = (userId) => ({
    type: UserActions.REMOVE_USER,
    data: userId
})

export const getUserList = () => async (dispatch) => {
    try {
        const response = await getUserAPI();
        console.log(response)
        dispatch(addUser(response.results))
    } catch (err) {
        console.log(err);
    }
}