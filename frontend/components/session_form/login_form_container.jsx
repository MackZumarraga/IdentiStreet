import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";
// import { Link } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_actions";
import { clearErrors } from "../../actions/session_actions";
import { fetchListings } from "../../actions/listing_actions";

import React from "react";


const mstp = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login'
//     navLink: <Link to="/signup" style={{ textDecoration: 'none' }}>
//     <div className="continue">
//         Continue with Sign Up
//     </div>
// </Link>
});

const mdtp = (dispatch, ownProps) => ({
    processForm: currentUser => dispatch(login(currentUser)),
    clearErrors: () => dispatch(clearErrors()),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
          Continue with Sign Up
        </button>
      ),
    closeModal: () => dispatch(closeModal()),
    fetchListings: (filters) => dispatch(fetchListings(filters))
});

export default connect(mstp, mdtp)(SessionForm);