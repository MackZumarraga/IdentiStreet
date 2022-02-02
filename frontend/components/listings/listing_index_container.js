import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
// import { updateBounds } from '../../actions/filter_actions';
import ListingIndex from './listing_index';

const mstp = (state, ownProps) => ({
    listings: Object.values(state.entities.listings),
    ownProp: ownProps
});

const mdtp = dispatch => ({
    fetchListings: (listings) => dispatch(fetchListings(listings)), //-mack listings argument necessary here?
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(mstp, mdtp)(ListingIndex);


//-mack - adding favorite function here later?