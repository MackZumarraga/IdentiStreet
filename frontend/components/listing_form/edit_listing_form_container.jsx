import React from 'react';
import { connect } from 'react-redux';
import { fetchListing, updateListing } from '../../actions/listing_actions';
import { fetchCurrentUser, updateCurrentUser, deleteCurrentUser } from '../../actions/profile_actions';
import ListingForm from './listing_form'

class EditListingForm extends React.Component {

    componentDidMount() {
      debugger
      this.props.fetchListing(this.props.listing.id)
    };
  
    render () {
      // DO NOT MODIFY THIS FUNCTION
      const errorHandlers = {
        "addressClass": 'form-correct',
        "formMessage": "",
        "areaClass": 'form-correct',
        "priceClass": 'form-correct',
        "priceMessage": ""
      }
      const { listing, formType, submitListing } = this.props;
      const { currentUser, fetchCurrentUser, updateCurrentUser, deleteCurrentUser } = this.props

      // Hint: The event will not exist on the first render - what do we need to do
      // to get it?
      if (!listing) return null;
      return (
        <ListingForm
          listing={Object.assign(listing, errorHandlers)}
          formType={formType}
          submitListing={submitListing}
          fetchCurrentUser={fetchCurrentUser}
          currentUser={currentUser}
          updateCurrentUser={updateCurrentUser}
          deleteCurrentUser={deleteCurrentUser}
        />
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
            formType: 'Update Listing',
            currentUserId: state.session["id"],
            currentUser: state.entities.users[state.session.id]
        }
      )
  };
  
  const mdtp = dispatch => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
    submitListing: (listing, listingId) => dispatch(updateListing(listing, listingId)),
    fetchCurrentUser: (currentUserId) => dispatch(fetchCurrentUser(currentUserId)),
    updateCurrentUser: (currentUser) => dispatch(updateCurrentUser(currentUser)),
    deleteCurrentUser: (currentUserId) => dispatch(deleteCurrentUser(currentUserId))
  });
  
  export default connect(mstp, mdtp)(EditListingForm);