import React from "react";
// import { Link } from "react-router-dom";
import ListingIndexItem from "./listing_index_item";

const ListingIndex = ({listings}) => (
    <div className="listing-index-container">
        <h1>Listings</h1>
        {listings.map(listing => (
            <ListingIndexItem listing={listing} key={listing.id}/>
        ))}
    </div>
);

export default ListingIndex;


//-mack - sorting & number of available listings as header for search result