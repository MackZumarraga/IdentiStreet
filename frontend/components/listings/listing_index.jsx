import React from "react";
import ListingMap from "../listing_map/listing_map";
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
                <div className="index-body-container">
                    <div className="listing-index-container">
                        <ul className="listing-ul">
                            {this.props.listings.map(listing => (
                                <ListingIndexItem listing={listing} key={Math.random()}/>
                            ))}
                        </ul>
                        {/* <div className="map-column">Map Column</div> */}
                    </div>
                    <div className="map-column">
                        <ListingMap listings={this.props.listings}/>
                    </div>
                </div>
            </div>
        )
    }
};

export default ListingIndex;


//-mack - sorting & number of available listings as header for search result