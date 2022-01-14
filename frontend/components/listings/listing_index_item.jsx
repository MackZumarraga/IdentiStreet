import React from 'react';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

class ListingIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        
    }


    handleClick() {
        const listingId = this.props.listing.id;
        this.props.history.push(`/listing/${listingId}`);
    }

    handleMouseOver() {
        console.log(this.props.listing.latitude, this.props.listing.longitude)
        console.log(this.props.listing.id)
        // MarkerManager.updateMarkers(this.props.listing);
    }

    render() {
        if (!this.props.listing) {
            return null;
        };

        const { address, neighborhood, category, image_urls, price, bedrooms, baths, square_feet, listing_agent } = this.props.listing
        return (
            <li className="listing-index-item" onClick={this.handleClick} onMouseOver={this.handleMouseOver}>
                <div className="listing-top">
                    <img src={image_urls[0]} alt="listing-image" className="listing-image"/>
                </div>
                <div className="listing-bottom">
                    <div className="listing-bottom-left">
                        <div className="upper-block">
                            <div className="listing-label">New {category} in {neighborhood}</div>
                            <div className="listing-address">{address}</div>
                            <div className="listing-price">${price.toLocaleString()}</div>
                        </div>
                        <div className="lower-block">
                            <div className="lower-block-details">
                                <div className="listing-beds">{bedrooms} Beds</div>
                                <div className="listing-baths">{baths} Baths</div>
                                <div className="listing-sqft">{square_feet} sqft</div>
                            </div>
                            <div className="lower-block-agent">Listing by {listing_agent}</div>   
                        </div>
                    </div>
                    <div className="favorite-wrapper">
                        <button type="submit" className="favorite-listing-button">♡</button>
                        <div className="button-lifter"></div>
                    </div>
                </div>
            </li>
        )
    }
};

export default withRouter(ListingIndexItem);