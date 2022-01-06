import * as ListingApiUtil from '../util/listing_api_util'

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING =  'RECEIVE_LISTING';
export const REMOVE_LISTING = 'REMOVE_LISTING';
export const RECEIVE_ERRORS =  'RECEIVE_ERRORS';

export const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings
});
  
export const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
});

export const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});



export const fetchListings = (listings) => dispatch => (
    ListingApiUtil.fetchListings(listings).then(listings => dispatch(receiveListings(listings)), error => dispatch(receiveErrors(error.responseJSON)))
);

export const fetchListing = (listingId) => dispatch => (
    // ListingApiUtil.fetchListing(listingId).then((listing) => dispatch(receiveListing(listing)), error => dispatch(receiveErrors(error.responseJSON)))
    ListingApiUtil.fetchListing(listingId).then((listing) => dispatch(receiveListing(listing)))
);

export const createListing = (listing) => dispatch => (
    ListingApiUtil.createListing(listing).then((listing) => dispatch(receiveListing(listing)), error => dispatch(receiveErrors(error.responseJSON)))
);

export const updateListing = (listing) => dispatch => (
    ListingApiUtil.updateListing(listing).then((listing) => dispatch(receiveListing(listing)), error => dispatch(receiveErrors(error.responseJSON)))
);

export const deleteListing = (listingId) => dispatch => (
    ListingApiUtil.deleteListing(listingId).then((listing) => dispatch(removeListing(listing.id)), error => dispatch(receiveErrors(error.responseJSON)))
);