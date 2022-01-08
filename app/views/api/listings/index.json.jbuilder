@listings.each do |listing|
    json.set! listing.id do
        json.partial! 'listing', listing: listing
        # json.image_url url_for(@listing.photo)
        json.image_urls listing.photos.map { |photo| url_for(photo) }
    end
end