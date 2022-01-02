import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    // <div>rent, buy, sell, buildings, resources, blog</div>
    // -mack - below to be replaced by a ul li map combo of areas (similar for all tabs) and neighborhood (dynamically listed for whichever's popular)
    <div className="rental-dropdown"> 
        <button className="rental-dropdown-button">RENT</button>
        <div className="rental-dropdown-content">
            <div className="areas-container">AREAS
                <Link to={`/searches/manhattan`}>Manhattan</Link>
                <Link to={`/searches/brooklyn`}>Brooklyn</Link>
                <Link to={`/searches/queens`}>Queens</Link>
                <Link to={`/searches/bronx`}>Bronx</Link>
                <Link to={`/searches/staten-island`}>Staten Island</Link>
                <Link to={`/searches/new-jersey`}>New Jersey</Link>
                <Link to={`/searches/allnyc-nj`}>All NYC + NJ</Link>
                <Link to={`/searches/near-me`}>Near Me</Link>

                <br/>
                <br/>
                <div>BROWSE</div>
                <Link to={`/searches/no-fee`}>No-Fee Apartments</Link>
                <Link to={`/searches/pet-friendly`}>Pet-Friendly Rentals</Link>
            </div>
            <div className="popular-neighborhoods-container">POPULAR NEIGHBORHOODS 
                <Link to={`/searches/tribeca`}>Tribeca</Link>
                <Link to={`/searches/ues`}>Upper East Side</Link>
                <Link to={`/searches/east-village`}>East Village</Link>
                <Link to={`/searches/williamsburg`}>Williamsburg</Link>
                <Link to={`/searches/astoria`}>Astoria</Link>
                <Link to={`/searches/hoboken`}>Hoboken</Link>
                <Link to={`/searches/jersey-city`}>Jersey City</Link>
                <Link to={`/searches/all`}>View All</Link>
            </div>
            <div>
                <img src="https://thumbs.dreamstime.com/z/modern-apartment-interior-grey-sofa-footstool-armcha-armchair-wooden-floor-tv-colorful-graphic-photo-concept-122713421.jpg" alt="apartment-photo" className="feature-rental"/>
            </div>
        </div>
    </div>
)
