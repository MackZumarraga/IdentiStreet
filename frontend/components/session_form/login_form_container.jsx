import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";
import React from "react";

const mstp = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login',
    navLink: <Link to="/signup">Sign Up</Link>
});

const mdtp = (dispatch, ownProps) => ({
    processForm: currentUser => dispatch(login(currentUser))
});

export default connect(mstp, mdtp)(SessionForm);