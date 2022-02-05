import React from "react";
import { Link } from "react-router-dom";

const Header = ({currentUser, logout, openModal, fetchListings}) => {

    const handleLogout = (e) => {
        e.preventDefault();
        logout().then(() => fetchListings(getState().ui.filters))
    };

    const sessionLinks = () => (
        <div className="nav-session-link">
            {/* <Link to={`/login`} className="nav-session-link" id="nav-login">Log In</Link>
            &nbsp;
            <Link to={`/signup`} className="nav-session-link" id="nav-signup">Sign Up</Link> */}
            <button onClick={() => openModal('login')} className="nav-session-link" id="nav-login">Log In / Sign Up</button>
             {/* &nbsp;/&nbsp;
            <button onClick={() => openModal('signup')}>Sign Up</button> */}
        </div>
    );

    const loggedInView = () => (
        /* <div>my activity link which holds tracked listings and saved searches</div>
            <div>account link which gives a dropdown to user profile and the logout button</div> */
        <div>
            <button className="activity-button">
                <Link to={`/my_activity`} id="my-activity">My Activity</Link>
            </button>
            <div className="account-dropdown">
                <button className="account-dropdown-button">Account &nbsp;⌵</button>
                <div className="account-dropdown-content">
                    <Link to={`/my_profile`} className="account-dropdown-myprofile">Profile</Link>
                    {/* <button onClick={logout} className="account-dropdown-logout">Log out</button> */}
                    <button onClick={handleLogout} className="account-dropdown-logout">Log out</button>
                </div>
            </div>
        </div>
    )
    
    return (
        <header className="header-width-maker">
            <div className="header-container">
                <Link to="/">
                    <img src={window.logo} alt="" className="identiStreet-image"/>
                </Link>
                <div>
                    {currentUser ? loggedInView() : sessionLinks()}
                </div>
            </div>
        </header>
    )
};

export default Header;