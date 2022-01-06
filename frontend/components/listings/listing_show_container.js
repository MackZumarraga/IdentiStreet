import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions'
import ListingShow from './listing_show';


const mapStateToProps = (state, ownProps) => ({
listing: state.entities.listings[ownProps.match.params.id]
});


const mapDispatchToProps = dispatch => ({
  fetchListing: listingId => dispatch(fetchListing(listingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);

