import { connect } from 'react-redux';
import { deleteListing, fetchListing, fetchListings } from '../../actions/listing_actions'
import { updateFilter } from '../../actions/filter_actions';
import { favoriteListing, unfavoriteListing } from '../../actions/favorite_actions';
import { openModal } from '../../actions/modal_actions';
import ListingShow from './listing_show';


const mapStateToProps = (state, ownProps) => ({
  listing: state.entities.listings[ownProps.match.params.id],
  currentUserId: state.session["id"],
  minPrice: state.ui.filters.minPrice,
  maxPrice: state.ui.filters.maxPrice,
  location: state.ui.filters.location,
  bedrooms: state.ui.filters.bedrooms
// liked_by_current: state.favorites.liked_by_current
});


const mapDispatchToProps = dispatch => ({
  fetchListing: listingId => dispatch(fetchListing(listingId)),
  fetchListings: (listings) => dispatch(fetchListings(listings)),
  deleteListing: listingId => dispatch(deleteListing(listingId)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  favoriteListing: (userId, ListingId) => dispatch(favoriteListing(userId, ListingId)),
  unfavoriteListing: (userId, ListingId) => dispatch(unfavoriteListing(userId, ListingId)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);

