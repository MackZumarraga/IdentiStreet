import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";

const _nullSession = {
    id: null
}

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    
    switch(action.type) {
        case RECEIVE_CURRENT_USER:    
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        case RECEIVE_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default sessionReducer;