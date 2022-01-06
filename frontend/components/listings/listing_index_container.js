import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import ListingIndex from './listing_index';

const mstp = state => ({
    listings: Object.values(state.entities.listings)
});

const mdtp = dispatch => ({
    fetchListings: (listings) => dispatch(fetchListings(listings)) //-mack listings argument necessary here?
});

export default connect(mstp, mdtp)(ListingIndex);


//-mack - adding favorite function here later?