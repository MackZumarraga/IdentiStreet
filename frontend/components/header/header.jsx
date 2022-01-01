import React from "react";
import { Link } from "react-router-dom";


const Header = ({currentUser, logout}) => {

    const sessionLinks = () => (
        <div>
            <Link to={`/login`}>Login</Link>
            &nbsp;or&nbsp;
            <Link to={`/signup`}>Signup</Link>
        </div>
    );

    const loggedInView = () => (
        <div>
            <div>my activity link which holds tracked listings and saved searches</div>
            <div>account link which gives a dropdown to user profile and the logout button</div>
            <button onClick={logout}>Log out</button>
        </div>
    )
    
    return (
        <header className="header-container">
            <Link to="/">
                <h1>IdentiStreet</h1>
            </Link>
            <div>
                {currentUser ? loggedInView() : sessionLinks()}
            </div>
        </header>
    )
};

export default Header;