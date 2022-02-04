import * as ProfileApiUtil from '../util/profile_api_util';
import { RECEIVE_CURRENT_USER } from './session_actions';
import { receiveErrors } from './session_actions';

export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

export const removeCurrentUserAction = () => ({
    type: REMOVE_CURRENT_USER,
});

export const updateCurrentUserAction = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});




export const updateCurrentUser = (currentUser) => dispatch => (
    ProfileApiUtil.updateCurrentUser(currentUser).then((currentUser) => dispatch(updateCurrentUser(currentUser)), error => dispatch(receiveErrors(error.responseJSON)))
);

export const deleteCurrentUser = (currentUserId) => dispatch => (
    ProfileApiUtil.deleteCurrentUser(currentUserId).then((deletedCurrentUser) => dispatch(removeCurrentUserAction(deletedCurrentUser)), error => dispatch(receiveErrors(error.responseJSON)))
);