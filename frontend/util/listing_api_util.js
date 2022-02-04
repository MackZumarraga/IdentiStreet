export const fetchListings = data => {
    return $.ajax({
      method: 'GET',
      url: 'api/listings',
      data: data
    })
};
  
export const fetchListing = id => {
    return $.ajax({
      method: 'GET',
      url: `api/listings/${id}`
    })
};
  
export const createListing = listing => {
    return $.ajax({
      method: 'POST',
      url: 'api/listings',
      data: listing,
      contentType: false,
      processData: false
    })
};
  
export const updateListing = (listing, listingId) => {
    return $.ajax({
      method: 'PATCH',
      url: `api/listings/${listingId}`,
      // data: { listing }
      data: {listing},
      // contentType: false,
      // processData: false
    })
};

export const deleteListing = id => {
    return $.ajax({
      method: 'DELETE',
      url: `api/listings/${id}`
    })
};

export const favoriteListing = (userId, listingId) => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: `api/favorites`,
    data: {
      favorite: {
        user_id: userId,
        listing_id: listingId
      }
    }
  })
};

export const unfavoriteListing = (userId, listingId) => {
  // debugger
  return $.ajax({
    method: 'DELETE',
    url: `api/favorites`,
    data: {
      favorite: {
        user_id: userId,
        listing_id: listingId
      }
    }
  })
};

// export const fetchCoordinates