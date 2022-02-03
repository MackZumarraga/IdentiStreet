import { connect } from 'react-redux';
import { deleteListing, fetchListing, fetchListings } from '../../actions/listing_actions'
import { updateFilter } from '../../actions/filter_actions';
import ListingShow from './listing_show';


const mapStateToProps = (state, ownProps) => ({
listing: state.entities.listings[ownProps.match.params.id],
currentUserId: state.session["id"]
});


const mapDispatchToProps = dispatch => ({
  fetchListing: listingId => dispatch(fetchListing(listingId)),
  fetchListings: (listings) => dispatch(fetchListings(listings)),
  deleteListing: listingId => dispatch(deleteListing(listingId)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);

