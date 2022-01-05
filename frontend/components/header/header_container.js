import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Header from './header';

const mstp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mdtp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mstp, mdtp)(Header);