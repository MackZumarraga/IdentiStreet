import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions'; //change to updatefilters
import NavBar from './nav_bar';//require NavBar component

const mstp = state => ({
    listings: Object.values(state.entities.listings),
    //add filters such as min and max price, location, bedrooms, advanced options
    minPrice: state.ui.filters.minPrice,
    maxPrice: state.ui.filters.maxPrice,
    location: state.ui.filters.location,
    bedrooms: state.ui.filters.bedrooms
});

const mdtp = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)), //change to updatefilters
    fetchListings: (filters) => dispatch(fetchListings(filters))
});

export default connect(mstp, mdtp)(NavBar); //change to Navbar