import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions';
import { clearFilter } from '../../actions/filter_actions';
import { favoriteListing, unfavoriteListing } from '../../actions/favorite_actions';
import { openModal } from '../../actions/modal_actions';
import ListingIndex from './listing_index';

const mstp = state => ({
    listings: Object.values(state.entities.listings),
    minPrice: state.ui.filters.minPrice,
    maxPrice: state.ui.filters.maxPrice,
    location: state.ui.filters.location,
    bedrooms: state.ui.filters.bedrooms,
    currentUserId: state.session["id"]
});

const mdtp = dispatch => ({
    fetchListings: (filters) => dispatch(fetchListings(filters)), //-mack listings argument necessary here? - replace with filters
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    clearFilter: () => dispatch(clearFilter()),
    favoriteListing: (userId, ListingId) => dispatch(favoriteListing(userId, ListingId)),
    unfavoriteListing: (userId, ListingId) => dispatch(unfavoriteListing(userId, ListingId)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mstp, mdtp)(ListingIndex);


//-mack - adding favorite function here later?