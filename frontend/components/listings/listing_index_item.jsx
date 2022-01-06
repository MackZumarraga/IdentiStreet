import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const listingId = this.props.listing.id;
        this.props.history.push(`/listing/${listingId}`);
    }

    render() {
        const { address, neighborhood, category, image_url, price, bedrooms, baths, square_feet, listing_agent } = this.props.listing
        return (
            <li className="listing-index-item" onClick={this.handleClick}>
                <div className="listing-top">
                    <img src={image_url} alt="listing-image" className="listing-image"/>
                </div>
                <div className="listing-bottom">
                    <div className="upper-block">
                        <div className="listing-label">New {category} in {neighborhood}</div>
                        <div className="listing-address">{address}</div>
                        <div className="listing-price">${price}</div>
                    </div>
                    <div className="lower-block">
                        <div className="lower-block-details">
                            <div className="listing-beds">{bedrooms} Beds</div>
                            <div className="listing-baths">{baths} Baths</div>
                            <div className="listing-sqft">{square_feet} sqft</div>
                        </div>
                        <div className="lower-block-agent">Listing by {listing_agent}</div>   
                    </div>
                    <button type="submit" className="favorite-listing-button">♡</button>
                </div>
            </li>
        )
    }
};

export default withRouter(ListingIndexItem);