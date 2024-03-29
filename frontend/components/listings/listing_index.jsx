import React from "react";
import ListingMap from "../listing_map/listing_map";
// import { Link } from "react-router-dom";
import ListingIndexItem from "./listing_index_item";
import NavBar from "../nav_bar/nav_bar";

class ListingIndex extends React.Component {

    //some state - whatever info the marker needs and passed as prop to map

    componentDidMount() {
        this.props.fetchListings(getState().ui.filters);
    }

    // componentDidUpdate() {
    //     this.props.fetchListings()
    // }
    componentWillUnmount() {
        debugger
        // if (!this.props.match.path === '/my_listings') {
        //     this.props.clearFilter();
        // }
        // this.props.match.path === '/search' ? null: this.props.clearFilter();
        this.props.clearFilter();
    }

    //define a function to pass to index item to keep context

    render() {
        const { minPrice, 
                maxPrice, 
                location, 
                bedrooms, 
                updateFilter, 
                fetchListings, 
                favoriteListing, 
                unfavoriteListing, 
                currentUserId, 
                openModal,
                listing,
            } = this.props

        debugger
        return (
            <div className="listing-index-width-maker">
                <div className="nav-bar-container">
                    <NavBar
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        location={location}
                        bedrooms={bedrooms}
                        updateFilter={updateFilter}
                        fetchListings={fetchListings}
                        listing={listing}
                    />
                </div>
                <div className={!listing ? "search-error-show" : "search-error-none"}>Your search - {getState().ui.filters.location} - did not match any listing</div>
                <div className="index-body-container">
                    <div className="listing-index-container">
                        <ul className="listing-ul">
                            {this.props.listings.map(listing => (
                                <ListingIndexItem 
                                    listing={listing} 
                                    key={Math.random()}
                                    favoriteListing={favoriteListing}
                                    unfavoriteListing={unfavoriteListing}
                                    currentUserId={currentUserId}
                                    fetchListings={fetchListings}
                                    openModal={openModal}
                                />
                            ))}
                        </ul>
                        {/* <div className="map-column">Map Column</div> */}
                    </div>
                    <div className="map-column">
                        <ListingMap listings={this.props.listings} updateBounds={this.props.updateBounds}/>
                    </div>
                </div>
            </div>
        )
    }
};

export default ListingIndex;


//-mack - sorting & number of available listings as header for search result