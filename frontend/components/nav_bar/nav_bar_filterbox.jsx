import React from 'react';
import { Link } from 'react-router-dom';

import AdvancedSearch from './advanced_search';

export default () => (
    <div className="filter-box"> 
        <div className="filter-box-container">
            <h1 className="filter-box-title">NEW YORK CITY REAL ESTATE</h1>
            <div className="filter-box-type-title">Rentals</div>
            <form className="filter-box-form">
                <div className="classic-search">
                    <label className="filter-box-label">LOCATION
                        <input type="text" placeholder='Manhattan'></input>
                    </label>
                    <label className="filter-box-label">MINIMUM PRICE
                        <input type="text" placeholder='Any' className="filter-box-input"></input>
                    </label>
                    <label className="filter-box-label">MAXIMUM PRICE
                        <input type="text" placeholder='Any' className="filter-box-input"></input>
                    </label>
                    <label className="filter-box-label">BEDROOMS
                        <input type="text" placeholder='Studio 1 2 3 4+' className="filter-box-input"></input>
                    </label>
                    <button>SEARCH</button>
                </div>
                <AdvancedSearch/>
            </form>
        </div>
    </div>
)
