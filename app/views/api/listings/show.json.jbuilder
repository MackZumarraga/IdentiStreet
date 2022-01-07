json.set! @listing.id do
    json.partial! 'listing', listing: @listing
    json.image_url url_for(@listing.photo)
end