import { connect } from 'react-redux';
import { deleteListing, fetchListing } from '../../actions/listing_actions'
import ListingShow from './listing_show';


const mapStateToProps = (state, ownProps) => ({
listing: state.entities.listings[ownProps.match.params.id],
currentUserId: state.session["id"]
});


const mapDispatchToProps = dispatch => ({
  fetchListing: listingId => dispatch(fetchListing(listingId)),
  deleteListing: listingId => dispatch(deleteListing(listingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);

