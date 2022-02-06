import * as ProfileApiUtil from '../util/profile_api_util';
import { RECEIVE_CURRENT_USER } from './session_actions';
import { receiveCurrentUser, receiveErrors } from './session_actions';

export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_ERRORS =  'RECEIVE_ERRORS';

export const receiveCurrentUsersAction = users =>({
    type: RECEIVE_USERS,
    users
})

export const removeCurrentUserAction = () => ({
    type: REMOVE_CURRENT_USER,
});

export const updateCurrentUserAction = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveErrorsAction = errors => ({
    type: RECEIVE_ERRORS,
    errors
});


export const fetchUsers = () => dispatch => (
    ProfileApiUtil.fetchUsers().then(users => dispatch(receiveCurrentUsersAction(users)), error => dispatch(receiveErrorsAction(error.responseJSON)))
);

export const fetchCurrentUser = (currentUserId) => dispatch => (
    ProfileApiUtil.fetchCurrentUser(currentUserId).then((currentUser) => dispatch(receiveCurrentUser(currentUser)), error => dispatch(receiveErrorsAction(error.responseJSON)))
);

export const updateCurrentUser = (currentUser) => dispatch => (
    ProfileApiUtil.updateCurrentUser(currentUser).then((currentUser) => dispatch(updateCurrentUserAction(currentUser)), error => dispatch(receiveErrorsAction(error.responseJSON)))
);

export const deleteCurrentUser = (currentUserId) => dispatch => (
    ProfileApiUtil.deleteCurrentUser(currentUserId).then((deletedCurrentUser) => dispatch(removeCurrentUserAction(deletedCurrentUser)), error => dispatch(receiveErrorsAction(error.responseJSON)))
);