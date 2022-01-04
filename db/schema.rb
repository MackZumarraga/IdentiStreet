# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_04_204433) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.string "address", null: false
    t.string "area", null: false
    t.string "neighborhood", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.string "category", null: false
    t.string "image_url", null: false
    t.integer "price", null: false
    t.integer "bedrooms", null: false
    t.integer "baths", null: false
    t.text "description", null: false
    t.integer "square_feet", null: false
    t.integer "dollars_per_sq_ft", null: false
    t.boolean "broker_fee", null: false
    t.boolean "outdoor_space", null: false
    t.boolean "dishwasher", null: false
    t.boolean "washer_dryer_in_unit", null: false
    t.boolean "washer_dryer_in_building", null: false
    t.boolean "guarantors_accepted", null: false
    t.boolean "furnished", null: false
    t.boolean "fireplace", null: false
    t.boolean "central_air", null: false
    t.boolean "city_view", null: false
    t.boolean "park_view", null: false
    t.boolean "skyline_view", null: false
    t.boolean "water_view", null: false
    t.boolean "elevator", null: false
    t.boolean "doorman", null: false
    t.boolean "gym", null: false
    t.boolean "garage_parking", null: false
    t.boolean "pets_allowed", null: false
    t.boolean "swimming_pool", null: false
    t.string "leasing_launch_date", null: false
    t.string "listing_agent", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["address"], name: "index_listings_on_address", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "name"
    t.string "phone_number"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
