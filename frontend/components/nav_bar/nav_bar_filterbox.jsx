import React from 'react';
import { withRouter } from 'react-router';
// import { Link } from 'react-router-dom';

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
        this.update = this.update.bind(this);
        this.capitalize = this.capitalize.bind(this);
        this.transform = this.transform.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchListings(getState().ui.filters)
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateFilter('broker_fee', '')
        this.props.updateFilter('pets_allowed', '')
        this.props.fetchListings(getState().ui.filters)
        this.props.history.push("/search")
    };

    update(filter) {
        // debugger
        return e => this.props.updateFilter(filter, this.transform(e.currentTarget.value))
    }

    capitalize(word) {
        const lower = word.toLowerCase();
        const first = word.charAt(0).toUpperCase();
        const remain = lower.slice(1);
        return first + remain;
    }

    transform(entry) {
        const capitalized = [];
        const words = entry.split(" ") || entry.split("-");
        words.forEach(word => capitalized.push(this.capitalize(word)))
        return capitalized.join(" ")
    }

    render() {
        const {minPrice, maxPrice, location, bedrooms} = this.props
        const filterBoxClass = (this.props.match.path === `/listing/:id`) ? "filter-box-in-show" : "filter-box"

        return (
            <div className={filterBoxClass}> 
                <div className="filter-box-container">
                    <h1 className="filter-box-title">NEW YORK CITY REAL ESTATE</h1>
                    <div className="filter-box-type-title">Rentals</div>
                    <form className="filter-box-form" onSubmit={this.handleSubmit}>
                        <div className="classic-search">
                            <label className="filter-box-label">
                                <div className="label-title">LOCATION</div>
                                <input 
                                    type="text" 
                                    placeholder='Manhattan' 
                                    className="filter-box-input"
                                    // value={getState().ui.filters["location"]} 
                                    onChange={this.update('location')}></input>
                            </label>
                            <label className="filter-box-range">
                                <div className="price-container">
                                    <div className="label-title">MINIMUM PRICE</div>
                                    <input type="text" placeholder='Any' className="filter-box-input-range" value={minPrice} onChange={this.update('minPrice')}></input>
                                </div>
                                &nbsp;
                                <div className="price-container">
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
                        {/* <AdvancedSearch/> */}
                    </form>
                </div>
            </div>          
        )
    }
};

export default withRouter(NavBarFilterBox);