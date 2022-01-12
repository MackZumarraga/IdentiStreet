class UpdateListings < ActiveRecord::Migration[6.1]
  def change
    remove_column :listings, :image_url

    change_column_null :listings, :dollars_per_sq_ft, true
  end
end

