import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";
import React from "react";

const mstp = (state, ownProps) => ({
    errors: Object.values(state.errors.session),
    formType: 'signup',
    navLink: <Link to="/login">Login</Link>
});

const mdtp = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mstp, mdtp)(SessionForm);