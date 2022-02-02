import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions';
import ListingIndex from './listing_index';

const mstp = state => ({
    listings: Object.values(state.entities.listings),
    minPrice: state.ui.filters.minPrice,
    maxPrice: state.ui.filters.maxPrice,
    location: state.ui.filters.location,
    bedrooms: state.ui.filters.bedrooms
});

const mdtp = dispatch => ({
    fetchListings: (filters) => dispatch(fetchListings(filters)), //-mack listings argument necessary here? - replace with filters
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mstp, mdtp)(ListingIndex);


//-mack - adding favorite function here later?