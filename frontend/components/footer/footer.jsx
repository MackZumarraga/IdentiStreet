import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-navbar">
                <div className="area-item-container">
                    <Link to={`/searches/manhattan`}>Manhattan</Link>
                    <Link to={`/searches/brooklyn`}>Brooklyn</Link>
                    <Link to={`/searches/queens`}>Queens</Link>
                    <Link to={`/searches/bronx`}>Bronx</Link>

                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <Link to={`/searches/manhattan`}>Manhattan</Link>
                    <Link to={`/searches/brooklyn`}>Brooklyn</Link>
                    <Link to={`/searches/queens`}>Queens</Link>
                    <Link to={`/searches/bronx`}>Bronx</Link>
                </div>
                <div className="area-item-container">
                    <Link to={`/searches/manhattan`}>Manhattan</Link>
                    <Link to={`/searches/brooklyn`}>Brooklyn</Link>
                    <Link to={`/searches/queens`}>Queens</Link>
                    <Link to={`/searches/bronx`}>Bronx</Link>
                    
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <Link to={`/searches/manhattan`}>Manhattan</Link>
                    <Link to={`/searches/brooklyn`}>Brooklyn</Link>
                    <Link to={`/searches/queens`}>Queens</Link>
                    <Link to={`/searches/bronx`}>Bronx</Link>

                </div>
                <div className="area-item-container">
                    <Link to={`/searches/manhattan`}>Manhattan</Link>
                    <Link to={`/searches/brooklyn`}>Brooklyn</Link>
                    <Link to={`/searches/queens`}>Queens</Link>
                    <Link to={`/searches/bronx`}>Bronx</Link>
                    
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <Link to={`/searches/manhattan`}>Manhattan</Link>
                    <Link to={`/searches/brooklyn`}>Brooklyn</Link>
                    <Link to={`/searches/queens`}>Queens</Link>
                    <Link to={`/searches/bronx`}>Bronx</Link>

                </div>
                <div className="footer-nav-item">
                    <Link to={`/blog`}>BLOG</Link>
                    <Link to={`/hiring`}>WE'RE HIRING</Link>
                    <Link to={`/submit`}>SUBMIT YOUR LISTINGS</Link>
                    <Link to={`/searches/all`}>BROWSE ALL HOMES</Link>

                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <Link to={`/blog`}>BLOG</Link>
                    <Link to={`/hiring`}>WE'RE HIRING</Link>
                    <Link to={`/submit`}>SUBMIT YOUR LISTINGS</Link>
                    <Link to={`/searches/all`}>BROWSE ALL HOMES</Link>
                </div>
            </div>

            <div className="footer-separator"></div>

            <ul className="favicons">
                <li>
                    <a className="github-link" href="https://github.com/MackZumarraga">O</a>
                </li>
                <li>
                    <a className="github-link" href="https://github.com/MackZumarraga">O</a>
                </li>
                <li>
                    <a className="github-link" href="https://github.com/MackZumarraga">O</a>
                </li>
            </ul>

            <div className="footer-text">IdentiStreet is a clone of StreetEasy.com. Created by Mackinjosh Zumarraga 2022</div>

            <div className="footer-image-container">
                <img src={window.skyline} alt="" className="footer-image"/>
            </div>
        </footer>
    )
};


export default Footer;