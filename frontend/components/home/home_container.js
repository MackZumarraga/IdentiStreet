import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import { openModal } from '../../actions/modal_actions';
import { favoriteListing, unfavoriteListing } from '../../actions/favorite_actions';

import Home from './home';

const mstp = state => ({
    listings: Object.values(state.entities.listings),
    currentUserId: state.session["id"]
});
  
const mdtp = dispatch => ({
    fetchListings: (listings) => dispatch(fetchListings(listings)),
    openModal: modal => dispatch(openModal(modal)),
    favoriteListing: (userId, ListingId) => dispatch(favoriteListing(userId, ListingId)),
    unfavoriteListing: (userId, ListingId) => dispatch(unfavoriteListing(userId, ListingId)) 
});
  

export default connect(mstp, mdtp)(Home); //change to Navbar