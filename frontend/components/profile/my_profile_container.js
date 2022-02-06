import { connect } from 'react-redux';

import { fetchListings } from '../../actions/listing_actions';
import { updateCurrentUser, deleteCurrentUser, fetchCurrentUser, fetchUsers } from '../../actions/profile_actions';
import { logout } from '../../actions/session_actions';

import MyProfile from './my_profile';
// import ListingForm from '../listing_form/listing_form';

const mapStateToProps = state => ({
    users: Object.values(state.entities.users),
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchCurrentUser: (currentUserId) => dispatch(fetchCurrentUser(currentUserId)),
  updateCurrentUser: (currentUser) => dispatch(updateCurrentUser(currentUser)),
  deleteCurrentUser: (currentUserId) => dispatch(deleteCurrentUser(currentUserId)),
  logout: () => dispatch(logout()),
  fetchListings: (filters) => dispatch(fetchListings(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
// )(ListingForm);
)(MyProfile);
