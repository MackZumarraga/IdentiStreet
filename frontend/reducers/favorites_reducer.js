import { UNFAVORITE_LISTING, FAVORITE_LISTING } from '../actions/favorite_actions';


const favoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch (action.type) {
      case FAVORITE_LISTING:
        nextState = {
            liked_by_current: action.favorited.liked_by_current
        };
        return Object.assign({}, state, nextState);
      case UNFAVORITE_LISTING:
        nextState = {
            liked_by_current: action.unfavorited.liked_by_current
        };
        return Object.assign({}, state, nextState);
      default:
        return state;
    }
  };
  
  export default favoritesReducer;