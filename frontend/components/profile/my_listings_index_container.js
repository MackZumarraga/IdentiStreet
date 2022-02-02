import { connect } from 'react-redux';

import { fetchListings } from '../../actions/listing_actions';
import { clearFilter } from '../../actions/filter_actions';
import ListingIndex from '../listings/listing_index';
// import ListingForm from '../listing_form/listing_form';
// import MyProfile from './my_profile';

const mapStateToProps = state => ({
    listings: Object.values(state.entities.listings).filter(listing => listing["user_id"] === state.session["id"]),
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  fetchListings: (listings) => dispatch(fetchListings(listings)),
  clearFilter: () => dispatch(clearFilter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
// )(ListingForm);
)(ListingIndex);
