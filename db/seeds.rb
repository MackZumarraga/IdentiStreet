# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

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

l1file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room.jpg')
l1file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
l1file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
l1.photos.attach(io: l1file1, filename: 'bed_room.jpg')
l1.photos.attach(io: l1file2, filename: 'bath_room.jpg')
l1.photos.attach(io: l1file3, filename: 'living_room.jpg')

l2 = Listing.create!(
    address: "222 XYZ Avenue, New York NY 44444",
    area: "Brooklyn",
    neighborhood: "Williamsburg",
    latitude: 40.703435,
    longitude: -73.943571,
    category: "rental",
    image_url: "https://cdn.pixabay.com/photo/2021/11/08/00/30/living-room-6778197_960_720.jpg",
    price: 3000,
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
    listing_agent: 'Olympus Associates'
)

l2file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room.jpg')
l2file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
l2file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
l2.photos.attach(io: l2file1, filename: 'bed_room.jpg')
l2.photos.attach(io: l2file2, filename: 'bath_room.jpg')
l2.photos.attach(io: l2file3, filename: 'living_room.jpg')

l3 = Listing.create!(
    address: "333 DEF Street, New York NY 33333",
    area: "Queens",
    neighborhood: "Long Island City",
    latitude: 40.744791,
    longitude: -73.953994,
    category: "rental",
    image_url: "https://cdn.pixabay.com/photo/2021/11/08/00/30/living-room-6778197_960_720.jpg",
    price: 2500,
    bedrooms: 2,
    baths: 2,
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

l3file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room.jpg')
l3file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
l3file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
l3.photos.attach(io: l3file1, filename: 'bed_room.jpg')
l3.photos.attach(io: l3file2, filename: 'bath_room.jpg')
l3.photos.attach(io: l3file3, filename: 'living_room.jpg')

l4 = Listing.create!(
    address: "111 GHI Avenue, New York NY 11111",
    area: "Brooklyn",
    neighborhood: "Brooklyn Heights",
    latitude: 40.697594,
    longitude: -73.996068,
    category: "rental",
    image_url: "https://cdn.pixabay.com/photo/2021/11/08/00/30/living-room-6778197_960_720.jpg",
    price: 4500,
    bedrooms: 2,
    baths: 2,
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
    listing_agent: 'Olympus Associates'
)

l4file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room.jpg')
l4file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
l4file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
l4.photos.attach(io: l4file1, filename: 'bed_room.jpg')
l4.photos.attach(io: l4file2, filename: 'bath_room.jpg')
l4.photos.attach(io: l4file3, filename: 'living_room.jpg')