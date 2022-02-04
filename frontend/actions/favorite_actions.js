import * as ListingApiUtil from '../util/listing_api_util';

export const UNFAVORITE_LISTING = 'UNFAVORITE_LISTING';
export const FAVORITE_LISTING = 'FAVORITE_LISTING';


export const favoriteListingAction = (favorited) => ({
    type: FAVORITE_LISTING,
    favorited
});

export const unfavoriteListingAction = (unfavorited) => ({
    type: UNFAVORITE_LISTING,
    unfavorited
});


export const favoriteListing = (userId, listingId) => dispatch => (
    ListingApiUtil.favoriteListing(userId, listingId).then((favorited) => dispatch(favoriteListingAction(favorited)))
);

export const unfavoriteListing = (userId, listingId) => dispatch => (
    ListingApiUtil.unfavoriteListing(userId, listingId).then((unfavorited) => dispatch(unfavoriteListingAction(unfavorited)))
);

// export const favoriteListing = (userId, listingId) => (
//     ListingApiUtil.favoriteListing(userId, listingId)
// );

// export const unfavoriteListing = (userId, listingId) => (
//     ListingApiUtil.unfavoriteListing(userId, listingId)
// );