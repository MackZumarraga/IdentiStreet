import React from 'react';
import { connect } from 'react-redux';
import { fetchListing, updateListing } from '../../actions/listing_actions';
import ListingForm from './listing_form'

class EditListingForm extends React.Component {

    componentDidMount() {
      debugger
      this.props.fetchListing(this.props.listing.id)
    };
  
    render () {
      // DO NOT MODIFY THIS FUNCTION
      const { listing, formType, submitListing } = this.props;
  
      // Hint: The event will not exist on the first render - what do we need to do
      // to get it?
      if (!listing) return null;
      return (
        <ListingForm
          listing={listing}
          formType={formType}
          submitListing={submitListing} />
      );
    }
  }
  
//   const mstp = (state, ownProps) => ({
//     listing: state.entities.listings[ownProps.match.params.listingId],
//     formType: 'Update Listing'
//   });

  const mstp = (state, ownProps) => {
      debugger
      return (
        {
            listing: state.entities.listings[ownProps.match.params.listingId],
            formType: 'Update Listing'
        }
      )
  };
  
  const mdtp = dispatch => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
    submitListing: (listing, listingId) => dispatch(updateListing(listing, listingId))
  });
  
  export default connect(mstp, mdtp)(EditListingForm);