import React from 'react';

import ImageCarousel from './img_carousel';
import Amenities from './amenities';


class ListingShow extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.fetchListing(this.props.match.params.id)
    }

    render() {

        if (!this.props.listing) {
            return null;
        };

        const {address, price, broker_fee, bedrooms, baths, category, description, listing_agent, neighborhood, leasing_launch_date} = this.props.listing
        return(
            <div className="listing-show-width-maker">
                <div className="listing-show-container">
                    <div className="listing-show-header"></div>
                    <div className="listing-show-content">
                        <div className="listing-show-left">
                            <div className="show-left-top">
                                <ImageCarousel listing={this.props.listing}/>
                                <div className="show-dates">
                                    <h3>AVAILABLE ON</h3>
                                    <div className="show-availability">{leasing_launch_date}</div>
                                </div>
                            </div>
                            <div className="show-left-bottom">
                                <h1>Description</h1>
                                <div>{description}</div>
                                <div className="show-amenities">
                                    <h1>Amenities</h1>
                                    <Amenities listing={this.props.listing}/>
                                </div>
                            </div>
                        </div>
                        <div className="listing-show-right">
                            <div className="show-right-full">
                                <h1 className="address-title">{address}</h1>
                                <div className="show-price">${price.toLocaleString()}
                                    <span className="show-price-text"> for&nbsp;rent</span>
                                    <span className="show-fee">{broker_fee ? " NO FEE" : null}</span>
                                </div>
                                <div className="show-bed-bath">
                                    <div>{bedrooms + baths}&nbsp;rooms</div>
                                    <div>{bedrooms}&nbsp;beds</div>
                                    <div>{baths}&nbsp;baths</div>
                                </div>
                                <div className="show-short-desc">{category} in {neighborhood}</div>
                            </div>
                            <div>
                                <button>♡ SAVE</button>
                                <button>+ ADD NOTES TO THIS LISTING</button>
                            </div>
                            <div>
                                <button>REQUEST A TOUR</button>
                                <button>ASK A QUESTION</button>
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

export default ListingShow;