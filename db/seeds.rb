# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Listing.destroy_all

#USERS
u1 = User.create!(
    email: 'guest@example.com',
    name: 'guest',
    phone_number: '5555555555',
    password: 'password'
)

demo = User.create!(
    email: 'test@example.com',
    name: 'test',
    phone_number: '4444444444',
    password: 'password'
)

#LISTINGS
l1 = Listing.create!(
    address: "555 ABC Street, New York NY 55555",
    area: "Manhattan",
    neighborhood: "Upper West Side",
    latitude: 40.784685,
    longitude: -73.976538,
    category: "rental",
    image_url: "https://cdn.pixabay.com/photo/2021/11/08/00/30/living-room-6778197_960_720.jpg",
    price: 2400,
    bedrooms: 2,
    baths: 1,
    description: "This laid-back brownstone comes with a polished interior. Located in the heart of west village.",
    square_feet: 360,
    dollars_per_sq_ft: 133,
    broker_fee: true,
    outdoor_space: true,
    dishwasher: true,
    washer_dryer_in_unit: true,
    washer_dryer_in_building: true,
    guarantors_accepted: true,
    furnished: true,
    fireplace: true,
    central_air: true,
    city_view: true,
    park_view: true,
    skyline_view: true,
    water_view: true,
    elevator: true,
    doorman: true,
    gym: true,
    garage_parking: true,
    pets_allowed: true,
    swimming_pool: true,
    leasing_launch_date: '10/25/2021',
    listing_agent: 'Sparta Associates'
)
