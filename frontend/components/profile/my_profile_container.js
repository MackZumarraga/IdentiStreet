import { connect } from 'react-redux';

// import { fetchListings } from '../../actions/listing_actions';
// import ListingForm from '../listing_form/listing_form';
import { updateCurrentUser, deleteCurrentUser } from '../../actions/profile_actions';

import MyProfile from './my_profile';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUser: (currentUser) => dispatch(updateCurrentUser(currentUser)),
  deleteCurrentUser: (currentUserId) => dispatch(deleteCurrentUser(currentUserId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
// )(ListingForm);
)(MyProfile);
