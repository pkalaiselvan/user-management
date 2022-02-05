import { getUser as getUserAPI } from '../api'
export const UserActions = {
    ADD_USER: 'ADD_USER',
    REMOVE_USER: 'REMOVE_USER'
}

export const addUser = (users) => ({
    type: UserActions.ADD_MESSAGE,
    users
})

export const removeUser = (user) => ({
    type: UserActions.REMOVE_USER,
    user
})

export const getUser = () => {
    return (dispatch) => {
        return getUserAPI().then((response) => {
            console.log(response)
            // dispatch(addUser(idx(response, _response => _response)))
        }).catch((e) => {
            console.log('error', e)
        })
    }
}