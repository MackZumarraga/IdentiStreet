import React from 'react';
import { withRouter } from 'react-router';

import ImageCarousel from './img_carousel';
import Amenities from './amenities';

import NavBar from '../nav_bar/nav_bar';


class ListingShow extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }


    componentDidMount() {
        this.props.fetchListing(this.props.match.params.id)
    }


    handleDelete(e) {
        e.preventDefault();
        debugger
        this.props.deleteListing(this.props.match.params.id)
        .then(resp => this.props.history.push(`/my_profile/my_listings`))
    }

    handleUpdate(e) {
        debugger
        e.preventDefault();
        debugger
        this.props.history.push(`/listing/${this.props.match.params.id}/edit`)
    }

    handleSave(e) {
        const { listing, currentUserId, fetchListing, favoriteListing, unfavoriteListing, openModal } = this.props
        const { listingId } = this.props.match.params.id

        e.preventDefault();
        debugger
        // if (!this.props.listing.liked_by_current) {
        //     this.props.favoriteListing(this.props.currentUserId, this.props.listing.id).then(() => this.props.fetchListing(this.props.match.params.id))
        // } else {
        //     this.props.unfavoriteListing(this.props.currentUserId, this.props.listing.id).then(() => this.props.fetchListing(this.props.match.params.id))
        // }

        if (listing.logged_in && !listing.liked_by_current) {
            favoriteListing(currentUserId, listing.id).then(() => fetchListing(listingId))
        } else if (listing.logged_in && listing.liked_by_current) {
            unfavoriteListing(currentUserId, listing.id).then(() => fetchListings(listingId))
        } else {
            openModal('login')
        };
    }

    render() {

        if (!this.props.listing) {
            return null;
        };
        debugger
        const ownListingClass = (this.props.currentUserId === this.props.listing.user_id) ? "own-listing-right-show" : "own-listing-right-none"
        const saveClass = (this.props.currentUserId === this.props.listing.user_id) ? "save-none" : "save-button"
        const requestClass = (this.props.currentUserId === this.props.listing.user_id) ? "request-tour-none" : "request-tour"
        const deleteClass = (this.props.currentUserId === this.props.listing.user_id) ? "delete-listing" : "delete-listing-none"
        const editClass = (this.props.currentUserId === this.props.listing.user_id) ? "update-listing" : "update-listing-none"

        debugger
        const {address, price, broker_fee, bedrooms, baths, category, description, listing_agent, neighborhood, leasing_launch_date} = this.props.listing
        const { updateFilter, fetchListings } = this.props

        const {liked_by_current} = this.props.listing
        const openHeart = liked_by_current ? "open-heart-none" : "open-heart-show"
        const closeHeart = liked_by_current ? "close-heart-show" : "close-heart-none"
        // const openHeart = liked_by_current ? "open-heart-none" : "open-heart-show"
        // const closeHeart = liked_by_current ? "close-heart-show" : "close-heart-none"
        const saveText = liked_by_current ? "save-text-none" : "save-text"
        const savedText = liked_by_current ? "saved-text" : "saved-text-none"

        return(
            <div className="listing-show-width-maker">
                <div className="listing-show-container">
                    <NavBar 
                        updateFilter={updateFilter}
                        fetchListings={fetchListings}
                    />
                    <div className="listing-show-header"></div>
                    <div className="listing-show-content">
                        <div className="listing-show-left">
                            <div className="show-left-top">
                                {this.props.listing.image_urls ? <ImageCarousel listing={this.props.listing}/> : null}
                                <div className="show-dates">
                                    <h3 className="available-on">AVAILABLE ON</h3>
                                    <div className="show-availability">{leasing_launch_date}</div>
                                </div>
                            </div>
                            <div className="show-left-bottom">
                                <div className="listing-show-description-title">Description</div>
                                <div className="listing-show-description-body">{description}</div>
                                <div className="show-amenities">
                                    <h1 className="listing-amenity-title">Amenities</h1>
                                    <Amenities listing={this.props.listing}/>
                                </div>
                            </div>
                        </div>
                        <div className="listing-show-right">
                            <div className="show-right-full">
                                <h1 className="address-title">{address}</h1>
                                <div className="show-price">${price.toLocaleString()}
                                    <span className="show-price-text"> for&nbsp;rent</span>
                                    {/* <span className="show-fee">{broker_fee ? " NO FEE" : null}</span> */}
                                    <span className={broker_fee ? null : "show-fee"}>{broker_fee ? null : " NO FEE"}</span>
                                </div>
                                <div className="show-bed-bath">
                                    <div>{bedrooms + baths}&nbsp;rooms</div>
                                    <div>{bedrooms}&nbsp;beds</div>
                                    <div>{baths}&nbsp;baths</div>
                                </div>
                                <div className="show-short-desc">{category} in {neighborhood}</div>
                            </div>
                            <div className="right-feature-functions">
                                <h3 className={ownListingClass}>OWN LISTING</h3>
                                <button className={saveClass} onClick={this.handleSave}>
                                    <span id={openHeart}>♡ </span>
                                    <span id={closeHeart}>♥ </span>
                                    <span id={saveText}>SAVE </span>
                                    <span id={savedText}>SAVED </span>
                                    </button>
                                <button className={requestClass}>REQUEST A TOUR</button>
                                <button className={editClass} onClick={this.handleUpdate}>EDIT</button>
                                <button className={deleteClass} onClick={this.handleDelete}>DELETE</button>
                                {/* <button>+ ADD NOTES TO THIS LISTING</button> */}
                            </div>
                            <div>
                                {/* <button>REQUEST A TOUR</button> */}
                                {/* <button>ASK A QUESTION</button> */}
                            </div>
                            <div className="contact-info">LISTED BY 
                                <div>{listing_agent}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default withRouter(ListingShow);