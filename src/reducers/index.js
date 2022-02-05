import { UserActions } from '../actions'

const initialState = {
    users: []
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case UserActions.ADD_USER:
            return [
                ...state,
                action.message
            ]
        case UserActions.REMOVE_USER:
            return {
                users: state.users.filter(user => user !== user)
            }
        default:
            return state
    }
}
