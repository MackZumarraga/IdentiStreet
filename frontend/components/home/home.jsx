import React from 'react';

import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';

import ListingIndexItem from '../listings/listing_index_item';

class Home extends React.Component {

  componentDidMount() {
    this.props.fetchListings();
  }

  // componentDidUpdate() {
  //   this.props.fetchListings();
  // }
  
  render() {
    
    const {listings} = this.props

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
              <ListingIndexItem listing={listing} key={Math.random()} />
              
            ))}
          </ul>
        </div>
      </div>
    );
  }
}


const mstp = state => ({
  listings: Object.values(state.entities.listings)
});

const mdtp = dispatch => ({
  fetchListings: (listings) => dispatch(fetchListings(listings))

});

export default connect(mstp, mdtp)(Home);