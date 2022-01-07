class Listing < ApplicationRecord
    validates :address, :area, :neighborhood, :latitude, :longitude, :price, presence: true

    has_many :favorites
    has_one_attached :photo
    has_many_attached :photos
end
