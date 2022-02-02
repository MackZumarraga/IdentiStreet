import React from 'react';
import { Link } from 'react-router-dom';

import AdvancedSearch from './advanced_search';

// export default () => (
//     <div className="filter-box"> 
//         <div className="filter-box-container">
//             <h1 className="filter-box-title">NEW YORK CITY REAL ESTATE</h1>
//             <div className="filter-box-type-title">Rentals</div>
//             <form className="filter-box-form">
//                 <div className="classic-search">
//                     <label className="filter-box-label">
//                         <div className="label-title">LOCATION</div>
//                         <input type="text" placeholder='Manhattan' className="filter-box-input"></input>
//                     </label>
//                     <label className="filter-box-range">
//                         <div>
//                             <div className="label-title">MINIMUM PRICE</div>
//                             <input type="text" placeholder='Any' className="filter-box-input-range"></input>
//                         </div>
//                         &nbsp;
//                         <div>
//                             <div className="label-title">MAXIMUM PRICE</div>
//                             <input type="text" placeholder='Any' className="filter-box-input-range-max"></input>
//                         </div>
//                     </label>
//                     <label className="filter-box-label">
//                         <div className="label-title">BEDROOMS</div>
//                         <input type="text" placeholder='Studio 1 2 3 4+' className="filter-box-input"></input>
//                     </label>
//                     <label className="filter-box-label">
//                         <Link to="/search" className="filter-search-button">SEARCH</Link>
//                     </label>
//                 </div>
//                 <AdvancedSearch/>
//             </form>
//         </div>
//     </div>
// )


class NavBarFilterBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.update = this.update.bind(this)      ;
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.updateFilter(this.state)
    };

    update(filter) {
        debugger
        return e => this.props.updateFilter(filter, e.currentTarget.value)
    }


    render() {
        const {minPrice, maxPrice, location, bedrooms} = this.props
        
        return (
            <div className="filter-box"> 
                <div className="filter-box-container">
                    <h1 className="filter-box-title">NEW YORK CITY REAL ESTATE</h1>
                    <div className="filter-box-type-title">Rentals</div>
                    <form className="filter-box-form" onSubmit={this.handleSubmit}>
                        <div className="classic-search">
                            <label className="filter-box-label">
                                <div className="label-title">LOCATION</div>
                                <input type="text" placeholder='Manhattan' className="filter-box-input" value={location} onChange={this.update('location')}></input>
                            </label>
                            <label className="filter-box-range">
                                <div>
                                    <div className="label-title">MINIMUM PRICE</div>
                                    <input type="text" placeholder='Any' className="filter-box-input-range" value={minPrice} onChange={this.update('minPrice')}></input>
                                </div>
                                &nbsp;
                                <div>
                                    <div className="label-title">MAXIMUM PRICE</div>
                                    <input type="text" placeholder='Any' className="filter-box-input-range-max" value={maxPrice} onChange={this.update('maxPrice')}></input>
                                </div>
                            </label>
                            <label className="filter-box-label">
                                <div className="label-title">BEDROOMS</div>
                                <input type="text" placeholder='Studio 1 2 3 4+' className="filter-box-input" value={bedrooms} onChange={this.update('bedrooms')}></input>
                            </label>
                            <label className="filter-box-label">
                                {/* <Link to="/search" className="filter-search-button">SEARCH</Link> */}
                                <button type="submit" className="filter-search-button">SEARCH</button>
                            </label>
                        </div>
                        <AdvancedSearch/>
                    </form>
                </div>
            </div>          
        )
    }
};

export default NavBarFilterBox;