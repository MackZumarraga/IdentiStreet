import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";
import React from "react";

const mstp = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login',
    navLink: <Link to="/signup" style={{ textDecoration: 'none' }}>
    <div className="continue">
        Continue with Sign Up
    </div>
</Link>
});

const mdtp = (dispatch, ownProps) => ({
    processForm: currentUser => dispatch(login(currentUser))
});

export default connect(mstp, mdtp)(SessionForm);