// import React from 'react';
// import { logout } from '../../actions/session_actions';
import { updateFilter } from '../../actions/filter_actions';
import { fetchListings } from '../../actions/listing_actions';

import { connect } from 'react-redux';
import Footer from './footer';

const mstp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mdtp = dispatch => ({
    // logout: () => dispatch(logout())
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    fetchListings: (filters) => dispatch(fetchListings(filters))
});

export default connect(mstp, mdtp)(Footer);