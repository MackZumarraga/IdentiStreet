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
      data: listing,
      contentType: false,
      processData: false
    })
};

export const deleteListing = id => {
    return $.ajax({
      method: 'DELETE',
      url: `api/listings/${id}`
    })
};

// export const fetchCoordinates