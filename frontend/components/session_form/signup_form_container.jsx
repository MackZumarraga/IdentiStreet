import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
// import { Link } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_actions";
import { clearErrors } from "../../actions/session_actions";
import { fetchListings } from "../../actions/listing_actions";

import React from "react";

const mstp = (state, ownProps) => ({
    errors: Object.values(state.errors.session),
    formType: 'signup'
    // navLink: <Link to="/login" style={{ textDecoration: 'none' }}>
    //     <div className="continue">
    //         Continue with Log in
    //     </div>
    // </Link>
});

const mdtp = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>
          Continue with Log in
        </button>
      ),
    closeModal: () => dispatch(closeModal()),
    fetchListings: (filters) => dispatch(fetchListings(filters))
});

export default connect(mstp, mdtp)(SessionForm);