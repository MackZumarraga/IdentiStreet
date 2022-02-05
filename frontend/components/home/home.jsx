import React from 'react';

import ListingIndexItem from '../listings/listing_index_item';

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    debugger
    this.props.fetchListings(getState().ui.filters);
  }

  // componentDidUpdate() {
  //   this.props.fetchListings();
  // }
  
  render() {
    // if (!this.props.listings) {
    //   return null;
    // };
    
    const {listings, fetchListings, openModal, currentUserId} = this.props

    let trendingListings = []

    for (let i = 0; i < 4; i++) {
      trendingListings.push(listings[Object.keys(listings)[i]])
    }

    
    return (
      <div className="body-width-maker">
        <div className="body-container">
          <div className="trending-apartments-title">Trending Apartments in NYC</div>
          <ul className="trending-apartments-items">
            {trendingListings.map(listing => (
              <ListingIndexItem 
                listing={listing} 
                key={Math.random()} 
                fetchListings={fetchListings}
                openModal={openModal}
                currentUserId={currentUserId}
              />
              
            ))}
          </ul>
        </div>
        {/* Hello */}
      </div>
    );
  }
};

export default Home;


