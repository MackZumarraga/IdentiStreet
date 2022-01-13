json.set! @listing.id do
    json.partial! 'listing', listing: @listing
    # json.image_url url_for(@listing.photo)
    # json.image_urls @listing.image_urls.map { |image| url_for(image) }
    json.image_urls @listing.photos.map { |photo| url_for(photo) }
end