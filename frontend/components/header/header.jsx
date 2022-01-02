import React from "react";
import { Link } from "react-router-dom";

const Header = ({currentUser, logout}) => {

    const sessionLinks = () => (
        <div className="nav-session-link">
            <Link to={`/login`} className="nav-session-link" id="nav-login">Log In</Link>
            &nbsp;
            <Link to={`/signup`} className="nav-session-link" id="nav-signup">Sign Up</Link>
        </div>
    );

    const loggedInView = () => (
        <div className="account-dropdown">
            {/* <div>my activity link which holds tracked listings and saved searches</div>
            <div>account link which gives a dropdown to user profile and the logout button</div> */}
            <button className="account-dropdown-button">Account ▼</button>
            <div className="account-dropdown-content">
                <Link to={`/my_profile`} className="account-dropdown-myprofile">Profile</Link>
                <button onClick={logout} className="account-dropdown-logout">Log out</button>
            </div>
        </div>
    )
    
    return (
        <header className="header-container">
            <Link to="/">
                <img src="/logo3.svg" alt="" className="identiStreet-image"/>
            </Link>
            <div>
                {currentUser ? loggedInView() : sessionLinks()}
            </div>
        </header>
    )
};

export default Header;