import React from "react";
import { Link } from "react-router-dom";

class ListingIndex extends React.Component {
    constructor(props) { //class, constructor, props necessary here?
        super(props);

        this.state = this.props.listings;
    }

    render() {
        const {listings} = this.props
        return (
            <div className="listing-index-container">
                <h1>Listings</h1>
                {listings.map(listing => (
                    <ListingIndexItem listing={listing} key={listing.id}/>
                ))}
            </div>
        )
    }
};

export default ListingIndex;


//-mack - sorting & number of available listings as header for search result