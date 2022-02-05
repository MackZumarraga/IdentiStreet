@listings.each do |listing|
    json.set! listing.id do
        json.partial! 'listing', listing: listing
        # json.image_url url_for(@listing.photo)
        json.image_urls listing.photos.map { |photo| url_for(photo) }
        json.liked_by_current self.logged_in? ? listing.favorited?(current_user.id) : false
        json.logged_in self.logged_in? ? true : false
    end
end