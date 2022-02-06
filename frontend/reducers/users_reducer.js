import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USERS, REMOVE_CURRENT_USER } from "../actions/profile_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser
            return nextState;
        case RECEIVE_USERS:
            debugger
            return action.users;
        case REMOVE_CURRENT_USER:
            delete nextState[action.currentUser]
        default:
            return state;
    }
};

export default usersReducer;