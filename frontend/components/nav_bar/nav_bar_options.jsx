import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ListingIndexItem from '../listings/listing_index_item';

// export default () => (
//     // <div>rent, buy, sell, buildings, resources, blog</div>
//     // -mack - below to be replaced by a ul li map combo of areas (similar for all tabs) and neighborhood (dynamically listed for whichever's popular)
//     <div className="rental-dropdown"> 
//         <button className="rental-dropdown-button">RENT</button>
//         <div className="rental-dropdown-content-width-maker">
//             <div className="rental-dropdown-content">
//                 <div className="areas-container">AREAS
//                     <Link to={`/searches/manhattan`}>Manhattan</Link>
//                     <button>Manhattan</button>
//                     <Link to={`/searches/brooklyn`}>Brooklyn</Link>
//                     <Link to={`/searches/queens`}>Queens</Link>
//                     <Link to={`/searches/bronx`}>Bronx</Link>
//                     <Link to={`/searches/staten-island`}>Staten Island</Link>
//                     <Link to={`/searches/new-jersey`}>New Jersey</Link>
//                     <Link to={`/searches/allnyc-nj`}>All NYC + NJ</Link>
//                     <Link to={`/searches/near-me`}>Near Me</Link>

//                     <br/>
//                     <br/>
//                     <div>BROWSE</div>
//                     <Link to={`/searches/no-fee`}>No-Fee Apartments</Link>
//                     <Link to={`/searches/pet-friendly`}>Pet-Friendly Rentals</Link>
//                 </div>
//                 <div className="popular-neighborhoods-container">POPULAR NEIGHBORHOODS 
//                     <Link to={`/searches/tribeca`}>Tribeca</Link>
//                     <Link to={`/searches/ues`}>Upper East Side</Link>
//                     <Link to={`/searches/east-village`}>East Village</Link>
//                     <Link to={`/searches/williamsburg`}>Williamsburg</Link>
//                     <Link to={`/searches/astoria`}>Astoria</Link>
//                     <Link to={`/searches/hoboken`}>Hoboken</Link>
//                     <Link to={`/searches/jersey-city`}>Jersey City</Link>
//                     <Link to={`/searches/all`}>View All</Link>

//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <div></div>
//                     <div></div>
//                     <div></div>
//                 </div>
//                 <div>
//                     <img src="https://cdn.pixabay.com/photo/2021/11/08/00/30/living-room-6778197_960_720.jpg" alt="apartment-photo" className="feature-rental"/>
//                 </div>
//             </div>
//         </div>
//     </div>
// )

class NavBarOptions extends React.Component {
    // <div>rent, buy, sell, buildings, resources, blog</div>
    // -mack - below to be replaced by a ul li map combo of areas (similar for all tabs) and neighborhood (dynamically listed for whichever's popular)
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleFee = this.handleFee.bind(this);
        this.handlePet = this.handlePet.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        debugger
        this.props.updateFilter('location', e.currentTarget.value)
        this.props.fetchListings(getState().ui.filters)
        this.props.history.push("/search")
    }

    handleFee(e) {
        const {updateFilter, fetchListings} = this.props;
        e.preventDefault();
        debugger
        updateFilter('broker_fee', e.currentTarget.value)
        updateFilter('location', '')
        updateFilter('maxPrice', '')
        updateFilter('minPrice', '')
        updateFilter('bedrooms', '')
        updateFilter('pets_allowed', '')

        fetchListings(getState().ui.filters)
        this.props.history.push("/search")
    }

    handlePet(e) {
        const {updateFilter, fetchListings} = this.props;
        e.preventDefault();
        debugger
        updateFilter('pets_allowed', e.currentTarget.value)
        updateFilter('location', '')
        updateFilter('maxPrice', '')
        updateFilter('minPrice', '')
        updateFilter('bedrooms', '')
        updateFilter('broker_fee', '')

        fetchListings(getState().ui.filters)
        this.props.history.push("/search")
    }

    render() {
        const {listing, fetchListings, openModal, currentUserId, favoriteListing, unfavoriteListing} = this.props
        const rentalDropdownClass = (this.props.match.path === `/listing/:id`) ? "rental-dropdown-button-in-show" : "rental-dropdown-button"

        return (
            <div className="rental-dropdown"> 
                <button className={rentalDropdownClass}>RENT</button>
                <div className="rental-dropdown-content-width-maker">
                    <div className="rental-dropdown-content">
                        <div className="areas-container">AREAS
                            <button value="Manhattan" onClick={this.handleClick}>Manhattan</button>
                            <button value="Brooklyn" onClick={this.handleClick}>Brooklyn</button>
                            <button value="Queens" onClick={this.handleClick}>Queens</button>
                            <button value="Bronx" onClick={this.handleClick}>Bronx</button>
                            <button value="Staten Island" onClick={this.handleClick}>Staten Island</button>
                            <button value="New Jersey" onClick={this.handleClick}>New Jersey</button>

                            <br/>
                            <br/>
                            <div>BROWSE</div>
                            <button value="false" onClick={this.handleFee}>No-Fee Apartments</button>
                            <button value="true" onClick={this.handlePet}>Pet-Friendly Rentals</button>
                        </div>
                        <div className="popular-neighborhoods-container">POPULAR NEIGHBORHOODS 
                            <button value="Tribeca" onClick={this.handleClick}>Tribeca</button>
                            <button value="Upper East Side" onClick={this.handleClick}>Upper East Side</button>
                            <button value="East Village" onClick={this.handleClick}>East Village</button>
                            <button value="Williamsburg" onClick={this.handleClick}>Williamsburg</button>
                            <button value="Astoria" onClick={this.handleClick}>Astoria</button>
                            <button value="Hoboken" onClick={this.handleClick}>Hoboken</button>
                            <button value="Jersey City" onClick={this.handleClick}>Jersey City</button>
                            <button value="" onClick={this.handleClick}>View All</button>
                            

                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="featured-listing-container">
                            {/* <img src="https://cdn.pixabay.com/photo/2021/11/08/00/30/living-room-6778197_960_720.jpg" alt="apartment-photo" className="feature-rental"/> */}
                            <div>Featured Listing</div>
                            <ListingIndexItem
                                listing={listing} 
                                key={Math.random()} 
                                fetchListings={fetchListings}
                                openModal={openModal}
                                currentUserId={currentUserId}
                                favoriteListing={favoriteListing}
                                unfavoriteListing={unfavoriteListing}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )    
    }
};

export default withRouter(NavBarOptions);