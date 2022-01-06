import React from "react";
// import { Link } from "react-router-dom";
import ListingIndexItem from "./listing_index_item";

class ListingIndex extends React.Component {

    componentDidMount() {
        this.props.fetchListings();
    }

    render() {
        // const {listings} = this.props
        // debugger
        return (
            <div className="listing-index-width-maker">
                <div className="listing-index-container">
                    <h1>Listings</h1>
                    <ul className="listing-ul">
                        {this.props.listings.map(listing => (
                            <ListingIndexItem listing={listing} key={listing.id}/>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
};

export default ListingIndex;


//-mack - sorting & number of available listings as header for search result