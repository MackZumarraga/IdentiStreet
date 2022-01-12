import { connect } from 'react-redux';

import { createListing } from '../../actions/listing_actions';
import ListingForm from '../listing_form/listing_form';

const mapStateToProps = state => ({
    listing: {
        "address": "test1",
        "area": "Manhattan",
        "neighborhood": "Financial District",
        "latitude": 40.5,
        "longitude": -73.5,
        "category": "rental",
        "price": 7000,
        "bedrooms": 3,
        "baths": 2,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Sed elementum tempus egestas sed sed. Vel facilisis volutpat est velit egestas dui id ornare. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dolor purus non enim praesent elementum facilisis leo vel. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Adipiscing enim eu turpis egestas. Quam pellentesque nec nam aliquam sem. A erat nam at lectus urna duis. Platea dictumst vestibulum rhoncus est. Massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed velit. Pellentesque id nibh tortor id aliquet lectus proin. Tempor id eu nisl nunc. Mattis ullamcorper velit sed ullamcorper.",
        "square_feet": 1200,
        "dollars_per_sq_ft": 133,
        "broker_fee": true,
        "outdoor_space": true,
        "dishwasher": true,
        "washer_dryer_in_unit": true,
        "washer_dryer_in_building": true,
        "guarantors_accepted": true,
        "furnished": true,
        "fireplace": true,
        "central_air": true,
        "city_view": true,
        "park_view": true,
        "skyline_view": true,
        "water_view": false,
        "elevator": true,
        "doorman": true,
        "gym": true,
        "garage_parking": true,
        "pets_allowed": true,
        "swimming_pool": true,
        "leasing_launch_date": "10/25/2021",
        "listing_agent": "Pierre Homes"
    }
});

const mapDispatchToProps = dispatch => ({
  createListing: listing => dispatch(createListing(listing))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingForm);
