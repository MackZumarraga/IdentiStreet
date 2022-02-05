import React from 'react';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

class ListingIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleHeart = this.handleHeart.bind(this);
        // this.handleMouseOver = this.handleMouseOver.bind(this);
        
    }


    handleClick() {
        const listingId = this.props.listing.id;
        this.props.history.push(`/listing/${listingId}`);
    }

    // handleMouseOver() {
    //     console.log(this.props.listing.latitude, this.props.listing.longitude)
    //     console.log(this.props.listing.id)
    // }

    handleHeart(e) {
        const { listing, currentUserId, fetchListings, favoriteListing, unfavoriteListing, openModal } = this.props

        e.preventDefault();
        e.stopPropagation();
        // if (!this.props.listing.liked_by_current) {
        //     this.props.favoriteListing(this.props.currentUserId, this.props.listing.id).then(() => this.props.fetchListings(getState().ui.filters))
        // } else {
        //     this.props.unfavoriteListing(this.props.currentUserId, this.props.listing.id).then(() => this.props.fetchListings(getState().ui.filters))
        // }
        debugger
        if (listing.logged_in && !listing.liked_by_current) {
            favoriteListing(currentUserId, listing.id).then(() => fetchListings(getState().ui.filters))
        } else if (listing.logged_in && listing.liked_by_current) {
            unfavoriteListing(currentUserId, listing.id).then(() => fetchListings(getState().ui.filters))
        } else {
            openModal('login')
        };
    }

    render() {
        if (!this.props.listing) {
            return null;
        };

        const { address, neighborhood, category, image_urls, price, bedrooms, baths, square_feet, listing_agent } = this.props.listing

        const {liked_by_current} = this.props.listing
        const openHeart = liked_by_current ? "open-heart-none" : "open-heart-show"
        const closeHeart = liked_by_current ? "close-heart-show" : "close-heart-none"

        const ownListing = (this.props.currentUserId === this.props.listing.user_id) ? "own-listing-show" : "own-listing-none"
        const displayHeart = (this.props.currentUserId === this.props.listing.user_id) ? "favorite-listing-button-none" : "favorite-listing-button"

        return (
            <li className="listing-index-item" onClick={this.handleClick}>
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
                        <span className={ownListing}>OWN&nbsp;LISTING</span>
                        <button type="submit" className={displayHeart} onClick={this.handleHeart}>
                            <span id={openHeart}>♡ </span>
                            <span id={closeHeart}>♥ </span>
                        </button>
                        <div className="button-lifter"></div>
                    </div>
                </div>
            </li>
        )
    }
};

export default withRouter(ListingIndexItem);