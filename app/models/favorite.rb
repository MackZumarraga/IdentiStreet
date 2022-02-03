class Favorite < ApplicationRecord
    validates :user_id, uniqueness: { scope: :listing_id }
  
    belongs_to :listing,
        class_name: :Listing,
        foreign_key: :listing_id
    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id
end
  