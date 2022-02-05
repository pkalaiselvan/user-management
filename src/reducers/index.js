export const UserActions = {
    ADD_USER: 'ADD_USER',
    SET_ACTIVE_USER: 'SET_ACTIVE_USER',
    REMOVE_USER: 'REMOVE_USER'
}
const initialState = {
    users: [],
    activeUser: ''
}

export const users = (state = initialState, action) => {
    switch (action.type) {
        case UserActions.ADD_USER:
            return {
                ...state,
                users: action.data
            }
        case UserActions.SET_ACTIVE_USER:
            return {
                ...state,
                activeUser: action.data
            }
        case UserActions.REMOVE_USER:
            return {
                users: state.users.filter(user => user !== user)
            }
        default:
            return state
    }
}
