import { connect } from 'react-redux';

import { createListing } from '../../actions/listing_actions';
import { fetchCurrentUser, updateCurrentUser, deleteCurrentUser } from '../../actions/profile_actions';
import { fetchUsers } from '../../actions/profile_actions';

import ListingForm from './listing_form';
// import MyProfile from './my_profile';

const mapStateToProps = state => ({
    listing: {
        "address": "",
        "area": "",
        "neighborhood": "",
        "latitude": 40.5,
        "longitude": -73.5,
        "category": "rental",
        "price": 0,
        "bedrooms": 0,
        "baths": 0,
        "description": "",
        "square_feet": 0,
        "dollars_per_sq_ft": 0,
        "broker_fee": false,
        "outdoor_space": false,
        "dishwasher": false,
        "washer_dryer_in_unit": false,
        "washer_dryer_in_building": false,
        "guarantors_accepted": false,
        "furnished": false,
        "fireplace": false,
        "central_air": false,
        "city_view": false,
        "park_view": false,
        "skyline_view": false,
        "water_view": false,
        "elevator": false,
        "doorman": false,
        "gym": false,
        "garage_parking": false,
        "pets_allowed": false,
        "swimming_pool": false,
        "leasing_launch_date": "",
        "listing_agent": "",
        "image_urls": null,
        "addressClass": 'form-correct',
        "formMessage": "",
        "areaClass": 'form-correct',
        "priceClass": 'form-correct',
        "priceMessage": ""
    },
    errors: state.errors.session,
    formType: 'Submit',
    currentUserId: state.session["id"],
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  submitListing: listing => dispatch(createListing(listing)),
  fetchCurrentUser: (currentUserId) => dispatch(fetchCurrentUser(currentUserId)),
  updateCurrentUser: (currentUser) => dispatch(updateCurrentUser(currentUser)),
  deleteCurrentUser: (currentUserId) => dispatch(deleteCurrentUser(currentUserId)),
  fetchUsers: () => dispatch(fetchUsers())  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingForm);
// )(MyProfile);
