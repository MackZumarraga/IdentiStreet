import { connect } from 'react-redux';

import { fetchListing } from '../../actions/listing_actions'
// import { selectListing } from '../../reducers/selectors';
import ListingShow from './listing_show';

// // const mapStateToProps = (state, { match }) => {
//   const mapStateToProps = (state, ownProps) => {
//   // const listingId = parseInt(match.params.listingId);
//   // const listing = selectListing(state.entities, listingId);
//   debugger
//   return {
//     // listingId,
//     // listing
//     // listing: state.entities.listings[ownProps.match.params.listingId]
//     listing: state.entities.listings[ownProps.match.params.id]

//   };
// };

function mstp(state, ownProps) {
  debugger
  return {
    listing: state.entities.listings.listing
  }
}


const mapDispatchToProps = dispatch => ({
  fetchListing: listingId => dispatch(fetchListing(listingId))
});

// export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);
export default connect(mstp, mapDispatchToProps)(ListingShow);
