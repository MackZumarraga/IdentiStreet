class Listing < ApplicationRecord
    validates :address, :area, :neighborhood, :latitude, :longitude, :price, presence: true

    belongs_to :lister,
        class_name: :User,
        foreign_key: :user_id

    # has_many :favorites
    # has_one_attached :photo
    has_many_attached :photos

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
          .where("lat > ?", bounds[:southWest][:lat])
          .where("lng > ?", bounds[:southWest][:lng])
          .where("lng < ?", bounds[:northEast][:lng])
    end
    
end
