import React from "react";
import ListingMap from "../listing_map/listing_map";
// import { Link } from "react-router-dom";
import ListingIndexItem from "./listing_index_item";

class ListingIndex extends React.Component {

    //some state - whatever info the marker needs and passed as prop to map

    componentDidMount() {
        this.props.fetchListings();
    }

    //define a function to pass to index item to keep context

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
                        <ListingMap listings={this.props.listings} updateBounds={this.props.updateBounds}/>
                    </div>
                </div>
            </div>
        )
    }
};

export default ListingIndex;


//-mack - sorting & number of available listings as header for search result