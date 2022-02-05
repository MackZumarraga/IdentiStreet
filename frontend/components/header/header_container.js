import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Header from './header';
import { fetchListings } from '../../actions/listing_actions';

const mstp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mdtp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchListings: (filters) => dispatch(fetchListings(filters))
});

export default connect(mstp, mdtp)(Header);