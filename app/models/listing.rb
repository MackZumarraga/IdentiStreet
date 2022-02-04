class Listing < ApplicationRecord
    validates :address, :area, :neighborhood, :latitude, :longitude, :price, presence: true

    belongs_to :lister,
        class_name: :User,
        foreign_key: :user_id

    has_many :favorites,
      class_name: :Favorite,
      foreign_key: :listing_id,
      dependent: :destroy

    # has_one_attached :photo
    has_many_attached :photos

    def favorited?(currentUserId)
        !!self.favorites.find{ |favorite| favorite.user_id == currentUserId }
    end

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
          .where("lat > ?", bounds[:southWest][:lat])
          .where("lng > ?", bounds[:southWest][:lng])
          .where("lng < ?", bounds[:northEast][:lng])
    end
    
end
