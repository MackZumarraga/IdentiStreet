import { RECEIVE_LISTINGS, RECEIVE_LISTING, REMOVE_LISTING, RECEIVE_ERRORS } from "../actions/listing_actions";

const listingsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state);

    switch(action.type) {
      case RECEIVE_LISTINGS:
        return action.listings;
      case RECEIVE_LISTING:
        // const newListing = { [action.listing.id]: action.listing };
        // return Object.assign({}, state, newListing);
        return action.listing;
      case REMOVE_LISTING:
        delete nextState[action.listingId]
        return nextState;
      // case RECEIVE_ERRORS: 
      //   return [];
      default:
        return state;
    }
  };
  
  export default listingsReducer;