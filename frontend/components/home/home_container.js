import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import { openModal } from '../../actions/modal_actions';


import Home from './home';

const mstp = state => ({
    listings: Object.values(state.entities.listings)
});
  
const mdtp = dispatch => ({
    fetchListings: (listings) => dispatch(fetchListings(listings)),
    openModal: modal => dispatch(openModal(modal))
});
  

export default connect(mstp, mdtp)(Home); //change to Navbar