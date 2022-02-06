export const UserActions = {
    ADD_USER: 'ADD_USER',
    SET_ACTIVE_USER: 'SET_ACTIVE_USER',
    DELETE_USER: 'DELETE_USER',
    SET_DELETE_TIMER: 'SET_DELETE_TIMER',
    UNDO_DELETE_USER: 'UNDO_DELETE_USER'
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
                activeUser: action.userId
            }
        case UserActions.SET_DELETE_TIMER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.login.uuid === action.userId) {
                        user['delete'] = { id: action.userId, finish: action.deleteTime, timeLeft: action.timeLeft }
                    }
                    return user
                })
            }
        case UserActions.DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.login.uuid !== action.userId),
                activeUser: state.activeUser === action.userId ? '' : state.activeUser
            }
        case UserActions.UNDO_DELETE_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.login.uuid === action.userId)
                        delete user['delete']
                    return user
                })
            }
        default:
            return state
    }
}
