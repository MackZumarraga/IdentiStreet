class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :address, null: false
      t.string :area, null: false
      t.string :neighborhood, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :category, null: false
      t.string :image_url, null: false
      t.integer :price, null: false
      t.integer :bedrooms, null: false
      t.integer :baths, null: false
      t.text :description, null: false
      t.integer :square_feet, null: false
      t.integer :dollars_per_sq_ft, null: false
      t.boolean :broker_fee, null: false
      t.boolean :outdoor_space, null: false
      t.boolean :dishwasher, null: false
      t.boolean :washer_dryer_in_unit, null: false
      t.boolean :washer_dryer_in_building, null: false
      t.boolean :guarantors_accepted, null: false
      t.boolean :furnished, null: false
      t.boolean :fireplace, null: false
      t.boolean :central_air, null: false
      t.boolean :city_view, null: false
      t.boolean :park_view, null: false
      t.boolean :skyline_view, null: false
      t.boolean :water_view, null: false
      t.boolean :elevator, null: false
      t.boolean :doorman, null: false
      t.boolean :gym, null: false
      t.boolean :garage_parking, null: false
      t.boolean :pets_allowed, null: false
      t.boolean :swimming_pool, null: false
      t.string :leasing_launch_date, null: false
      t.string :listing_agent, null: false

      t.timestamps
    end

    add_index :listings, :address, unique: true
  end
end
