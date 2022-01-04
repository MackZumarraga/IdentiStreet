class Listing < ApplicationRecord
    validates :address, :area, :neighborhood, :latitude, :longitude, :price, presence: true

    has_many :favorites
end
