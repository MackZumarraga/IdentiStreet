import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'


export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});


export const login = (currentUser) => dispatch => (
    SessionApiUtil.login(currentUser).then(currentUser => dispatch(receiveCurrentUser(currentUser)), error => dispatch(receiveErrors(error.responseJSON)))
);

export const logout = () => dispatch => (
    SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()), error => dispatch(receiveErrors(error.responseJSON)))
);

export const signup = (user) => dispatch => (
    SessionApiUtil.signup(user).then((currentUser) => dispatch(receiveCurrentUser(currentUser)), error => dispatch(receiveErrors(error.responseJSON)))
);
