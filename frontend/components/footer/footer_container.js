import React from 'react';
// import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Footer from './footer';

const mstp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mdtp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mstp, mdtp)(Footer);