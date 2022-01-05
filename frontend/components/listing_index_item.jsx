import React from 'react';
// import { withRouter } from 'react-router-dom';

class ListingIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { address, neighborhood, category, image_url, price, bedrooms, baths, square_feet, listing_agent }
        return (
            <div className="listing-index-item">
                <div className="listing-top">
                    <img src={`${image_url}`} alt="listing-image" className="listing-image"/>
                </div>
                <div className="listing-bottom">
                    <div className="upper-block">
                        <div className="listing-label">Mini Description using category and neighborhood</div>
                        <div className="listing-address">Address</div>
                        <div className="listing-price">Price</div>
                    </div>
                    <div className="lower-block">
                        <div className="lower-block-details">
                            beds, baths, sq ft
                        </div>
                        <div className="lower-block-agent">
                            listing agent
                        </div>
                    </div>
                    <button type="submit" className="favorite-listing-button"></button>
                </div>
            </div>
        )
    }
};

export default ListingIndexItem;