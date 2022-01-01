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

    const personalGreeting = () => (
        <div>
            <h1>Greetings {currentUser.name}</h1>
            <button onClick={logout}>Log out</button>
        </div>
    )
    
    return currentUser ? personalGreeting() : sessionLinks();
};

export default Header;