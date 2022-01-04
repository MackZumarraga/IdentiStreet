import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";
import React from "react";

import { clearErrors } from "../../actions/session_actions";

const mstp = (state, ownProps) => ({
    errors: Object.values(state.errors.session),
    formType: 'signup',
    navLink: <Link to="/login" style={{ textDecoration: 'none' }}>
        <div className="continue">
            Continue with Log in
        </div>
    </Link>
});

const mdtp = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mstp, mdtp)(SessionForm);