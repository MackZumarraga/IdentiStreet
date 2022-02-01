import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import { updateBounds } from '../../actions/filter_actions'; //change to updatefilters
import NavBar from './nav_bar';//require NavBar component

const mstp = state => ({
    listings: Object.values(state.entities.listings)
    //add filters such as min and max price, location, bedrooms, advanced options
});

const mdtp = dispatch => ({
    updateBounds: (bounds) => dispatch(updateBounds(bounds)) //change to updatefilters
});

export default connect(mstp, mdtp)(NavBar); //change to Navbar