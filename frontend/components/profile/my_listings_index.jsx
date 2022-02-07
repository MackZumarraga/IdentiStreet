import React from "react";
// import ListingMap from "../listing_map/listing_map";
import ListingMap from "../listing_map/listing_map";
// import { Link } from "react-router-dom";
import ListingIndexItem from "../listings/listing_index_item";
import NavBar from "../nav_bar/nav_bar";
import MyProfile from "./my_profile";

class MyListingsIndex extends React.Component {

    //some state - whatever info the marker needs and passed as prop to map

    componentDidMount() {
        this.props.fetchListings(getState().ui.filters);
    }

    // componentDidUpdate() {
    //     this.props.fetchListings()
    // }
    // componentWillUnmount() {
    //     debugger
        // if (!this.props.match.path === '/my_listings') {
        //     this.props.clearFilter();
        // }
        // this.props.match.path === '/search' ? null: this.props.clearFilter();
    //     this.props.clearFilter();
    // }

    //define a function to pass to index item to keep context

    render() {
        const {minPrice, maxPrice, location, bedrooms, updateFilter, fetchListings} = this.props
        const { currentUser, 
                currentUserId, 
                fetchCurrentUser, 
                updateCurrentUser, 
                deleteCurrentUser, 
                favoriteListing, 
                unfavoriteListing, 
                fetchUsers,
                listing,
                openModal
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
                        openModal={openModal}
                        currentUserId={currentUserId}
                        favoriteListing={favoriteListing}
                        unfavoriteListing={unfavoriteListing}
                    />
                </div>
                <div>
                    <MyProfile
                        fetchCurrentUser={fetchCurrentUser}
                        currentUser={currentUser}
                        updateCurrentUser={updateCurrentUser}
                        deleteCurrentUser={deleteCurrentUser}
                        fetchUsers={fetchUsers}
                    />
                </div>
                <div className="index-body-container">
                    <div className="listing-index-container">
                        <ul className="listing-ul">
                            {this.props.listings.map(listing => (
                                <ListingIndexItem 
                                    listing={listing} 
                                    key={Math.random()}
                                    currentUserId={currentUserId}
                                    favoriteListing={favoriteListing}
                                    unfavoriteListing={unfavoriteListing}
                                    fetchListings={fetchListings}
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

export default MyListingsIndex;


//-mack - sorting & number of available listings as header for search result