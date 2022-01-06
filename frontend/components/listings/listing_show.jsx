import React from 'react';


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

        const {address} = this.props.listing
        return(
            <div className="listing-show-width-maker">
                <div className="listing-show-container">
                    {/* Hello I'm from Listing Show - the listing you're looking at is {address} with the id of {id}. */}
                    <div className="listing-show-header">Hello, the address for this listing is {address}</div>
                    <div className="listing-show-content">
                        <div className="listing-show-left">left
                            <div className="show-left-top">left/top -- photo carousel</div>
                            <div className="show-left-bottom">left/bottom -- description</div>
                        </div>
                        <div className="listing-show-right">right
                            <div className="show-right-full">basic details</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ListingShow;