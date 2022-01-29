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

# demo = User.create!(
#     email: 'test@example.com',
#     name: 'test',
#     phone_number: '4444444444',
#     password: 'password'
# )

#LISTINGS
l1 = Listing.create!(
    user_id: u1.id,
    address: "555 ABC Street, New York NY 55555",
    area: "Manhattan",
    neighborhood: "Upper West Side",
    latitude: 40.784685,
    longitude: -73.976538,
    category: "rental",
    price: 2400,
    bedrooms: 2,
    baths: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Sed elementum tempus egestas sed sed. Vel facilisis volutpat est velit egestas dui id ornare. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dolor purus non enim praesent elementum facilisis leo vel. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Adipiscing enim eu turpis egestas. Quam pellentesque nec nam aliquam sem. A erat nam at lectus urna duis. Platea dictumst vestibulum rhoncus est. Massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed velit. Pellentesque id nibh tortor id aliquet lectus proin. Tempor id eu nisl nunc. Mattis ullamcorper velit sed ullamcorper.",
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
    user_id: u1.id,
    address: "222 XYZ Avenue, New York NY 44444",
    area: "Brooklyn",
    neighborhood: "Williamsburg",
    latitude: 40.703435,
    longitude: -73.943571,
    category: "rental",
    price: 3000,
    bedrooms: 2,
    baths: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Sed elementum tempus egestas sed sed. Vel facilisis volutpat est velit egestas dui id ornare. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dolor purus non enim praesent elementum facilisis leo vel. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Adipiscing enim eu turpis egestas. Quam pellentesque nec nam aliquam sem. A erat nam at lectus urna duis. Platea dictumst vestibulum rhoncus est. Massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed velit. Pellentesque id nibh tortor id aliquet lectus proin. Tempor id eu nisl nunc. Mattis ullamcorper velit sed ullamcorper.",
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

l2file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room2.jpg')
l2file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
l2file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
l2.photos.attach(io: l2file1, filename: 'bed_room.jpg')
l2.photos.attach(io: l2file2, filename: 'bath_room.jpg')
l2.photos.attach(io: l2file3, filename: 'living_room.jpg')

# l3 = Listing.create!(
#     address: "333 DEF Street, New York NY 33333",
#     area: "Queens",
#     neighborhood: "Long Island City",
#     latitude: 40.744791,
#     longitude: -73.953994,
#     category: "rental",
#     price: 2500,
#     bedrooms: 2,
#     baths: 2,
#     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Sed elementum tempus egestas sed sed. Vel facilisis volutpat est velit egestas dui id ornare. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dolor purus non enim praesent elementum facilisis leo vel. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Adipiscing enim eu turpis egestas. Quam pellentesque nec nam aliquam sem. A erat nam at lectus urna duis. Platea dictumst vestibulum rhoncus est. Massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed velit. Pellentesque id nibh tortor id aliquet lectus proin. Tempor id eu nisl nunc. Mattis ullamcorper velit sed ullamcorper.",
#     square_feet: 360,
#     dollars_per_sq_ft: 133,
#     broker_fee: true,
#     outdoor_space: true,
#     dishwasher: true,
#     washer_dryer_in_unit: true,
#     washer_dryer_in_building: true,
#     guarantors_accepted: true,
#     furnished: true,
#     fireplace: true,
#     central_air: true,
#     city_view: true,
#     park_view: true,
#     skyline_view: true,
#     water_view: true,
#     elevator: true,
#     doorman: true,
#     gym: true,
#     garage_parking: true,
#     pets_allowed: true,
#     swimming_pool: true,
#     leasing_launch_date: '10/25/2021',
#     listing_agent: 'Sparta Associates'
# )

# l3file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room3.jpg')
# l3file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
# l3file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
# l3.photos.attach(io: l3file1, filename: 'bed_room.jpg')
# l3.photos.attach(io: l3file2, filename: 'bath_room.jpg')
# l3.photos.attach(io: l3file3, filename: 'living_room.jpg')

# l4 = Listing.create!(
#     address: "111 GHI Avenue, New York NY 11111",
#     area: "Brooklyn",
#     neighborhood: "Brooklyn Heights",
#     latitude: 40.697594,
#     longitude: -73.996068,
#     category: "rental",
#     price: 4500,
#     bedrooms: 2,
#     baths: 2,
#     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Sed elementum tempus egestas sed sed. Vel facilisis volutpat est velit egestas dui id ornare. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dolor purus non enim praesent elementum facilisis leo vel. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Adipiscing enim eu turpis egestas. Quam pellentesque nec nam aliquam sem. A erat nam at lectus urna duis. Platea dictumst vestibulum rhoncus est. Massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed velit. Pellentesque id nibh tortor id aliquet lectus proin. Tempor id eu nisl nunc. Mattis ullamcorper velit sed ullamcorper.",
#     square_feet: 360,
#     dollars_per_sq_ft: 133,
#     broker_fee: true,
#     outdoor_space: true,
#     dishwasher: true,
#     washer_dryer_in_unit: true,
#     washer_dryer_in_building: true,
#     guarantors_accepted: true,
#     furnished: true,
#     fireplace: true,
#     central_air: true,
#     city_view: true,
#     park_view: true,
#     skyline_view: true,
#     water_view: true,
#     elevator: true,
#     doorman: true,
#     gym: true,
#     garage_parking: true,
#     pets_allowed: true,
#     swimming_pool: true,
#     leasing_launch_date: '10/25/2021',
#     listing_agent: 'Olympus Associates'
# )

# l4file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room4.jpg')
# l4file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
# l4file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
# l4.photos.attach(io: l4file1, filename: 'bed_room.jpg')
# l4.photos.attach(io: l4file2, filename: 'bath_room.jpg')
# l4.photos.attach(io: l4file3, filename: 'living_room.jpg')

# ######

# l5 = Listing.create!(
#     address: "450 Greenwich St, New York NY 10013",
#     area: "Manhattan",
#     neighborhood: "Tribeca",
#     latitude: 40.723343,
#     longitude: -74.009884,
#     category: "rental",
#     price: 2400,
#     bedrooms: 1,
#     baths: 1,
#     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Sed elementum tempus egestas sed sed. Vel facilisis volutpat est velit egestas dui id ornare. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dolor purus non enim praesent elementum facilisis leo vel. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Adipiscing enim eu turpis egestas. Quam pellentesque nec nam aliquam sem. A erat nam at lectus urna duis. Platea dictumst vestibulum rhoncus est. Massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed velit. Pellentesque id nibh tortor id aliquet lectus proin. Tempor id eu nisl nunc. Mattis ullamcorper velit sed ullamcorper.",
#     square_feet: 400,
#     dollars_per_sq_ft: 133,
#     broker_fee: true,
#     outdoor_space: true,
#     dishwasher: true,
#     washer_dryer_in_unit: true,
#     washer_dryer_in_building: false,
#     guarantors_accepted: true,
#     furnished: true,
#     fireplace: true,
#     central_air: true,
#     city_view: false,
#     park_view: true,
#     skyline_view: true,
#     water_view: true,
#     elevator: true,
#     doorman: false,
#     gym: true,
#     garage_parking: true,
#     pets_allowed: true,
#     swimming_pool: false,
#     leasing_launch_date: '10/25/2021',
#     listing_agent: 'Diamond Residentials'
# )

# l5file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room5.jpg')
# l5file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
# l5file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
# l5.photos.attach(io: l5file1, filename: 'bed_room.jpg')
# l5.photos.attach(io: l5file2, filename: 'bath_room.jpg')
# l5.photos.attach(io: l5file3, filename: 'living_room.jpg')

# l6 = Listing.create!(
#     address: "17 Chittenden Ave, New York NY 10033",
#     area: "Manhattan",
#     neighborhood: "Washington Heights",
#     latitude: 40.855419782643985,
#     longitude: -73.93852977291631,
#     category: "rental",
#     price: 1900,
#     bedrooms: 1,
#     baths: 1,
#     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Sed elementum tempus egestas sed sed. Vel facilisis volutpat est velit egestas dui id ornare. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dolor purus non enim praesent elementum facilisis leo vel. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Adipiscing enim eu turpis egestas. Quam pellentesque nec nam aliquam sem. A erat nam at lectus urna duis. Platea dictumst vestibulum rhoncus est. Massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed velit. Pellentesque id nibh tortor id aliquet lectus proin. Tempor id eu nisl nunc. Mattis ullamcorper velit sed ullamcorper.",
#     square_feet: 500,
#     dollars_per_sq_ft: 133,
#     broker_fee: true,
#     outdoor_space: true,
#     dishwasher: false,
#     washer_dryer_in_unit: true,
#     washer_dryer_in_building: true,
#     guarantors_accepted: true,
#     furnished: false,
#     fireplace: true,
#     central_air: true,
#     city_view: false,
#     park_view: false,
#     skyline_view: true,
#     water_view: true,
#     elevator: true,
#     doorman: true,
#     gym: true,
#     garage_parking: true,
#     pets_allowed: false,
#     swimming_pool: true,
#     leasing_launch_date: '10/25/2021',
#     listing_agent: 'Barron Listings'
# )

# l6file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room6.jpg')
# l6file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
# l6file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
# l6.photos.attach(io: l6file1, filename: 'bed_room.jpg')
# l6.photos.attach(io: l6file2, filename: 'bath_room.jpg')
# l6.photos.attach(io: l6file3, filename: 'living_room.jpg')

# l7 = Listing.create!(
#     address: "191 Woodbine St, Brooklyn NY 11221",
#     area: "Brooklyn",
#     neighborhood: "Bushwick",
#     latitude: 40.693935,
#     longitude: -73.915579,
#     category: "rental",
#     price: 3500,
#     bedrooms: 2,
#     baths: 2,
#     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Sed elementum tempus egestas sed sed. Vel facilisis volutpat est velit egestas dui id ornare. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dolor purus non enim praesent elementum facilisis leo vel. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Adipiscing enim eu turpis egestas. Quam pellentesque nec nam aliquam sem. A erat nam at lectus urna duis. Platea dictumst vestibulum rhoncus est. Massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed velit. Pellentesque id nibh tortor id aliquet lectus proin. Tempor id eu nisl nunc. Mattis ullamcorper velit sed ullamcorper.",
#     square_feet: 600,
#     dollars_per_sq_ft: 133,
#     broker_fee: true,
#     outdoor_space: false,
#     dishwasher: true,
#     washer_dryer_in_unit: true,
#     washer_dryer_in_building: true,
#     guarantors_accepted: false,
#     furnished: true,
#     fireplace: false,
#     central_air: true,
#     city_view: false,
#     park_view: true,
#     skyline_view: false,
#     water_view: true,
#     elevator: true,
#     doorman: false,
#     gym: true,
#     garage_parking: true,
#     pets_allowed: true,
#     swimming_pool: false,
#     leasing_launch_date: '10/25/2021',
#     listing_agent: 'Hecksher Associates'
# )

# l7file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room7.jpg')
# l7file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
# l7file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
# l7.photos.attach(io: l7file1, filename: 'bed_room.jpg')
# l7.photos.attach(io: l7file2, filename: 'bath_room.jpg')
# l7.photos.attach(io: l7file3, filename: 'living_room.jpg')

# l8 = Listing.create!(
#     address: "47th St, Woodside, NY 11377",
#     area: "Queens",
#     neighborhood: "Sunnyside",
#     latitude: 40.740767, 
#     longitude: -73.918256,
#     category: "rental",
#     price: 2500,
#     bedrooms: 2,
#     baths: 2,
#     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Sed elementum tempus egestas sed sed. Vel facilisis volutpat est velit egestas dui id ornare. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dolor purus non enim praesent elementum facilisis leo vel. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Adipiscing enim eu turpis egestas. Quam pellentesque nec nam aliquam sem. A erat nam at lectus urna duis. Platea dictumst vestibulum rhoncus est. Massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed velit. Pellentesque id nibh tortor id aliquet lectus proin. Tempor id eu nisl nunc. Mattis ullamcorper velit sed ullamcorper.",
#     square_feet: 450,
#     dollars_per_sq_ft: 133,
#     broker_fee: false,
#     outdoor_space: true,
#     dishwasher: true,
#     washer_dryer_in_unit: true,
#     washer_dryer_in_building: true,
#     guarantors_accepted: true,
#     furnished: true,
#     fireplace: true,
#     central_air: true,
#     city_view: false,
#     park_view: false,
#     skyline_view: true,
#     water_view: false,
#     elevator: true,
#     doorman: true,
#     gym: true,
#     garage_parking: true,
#     pets_allowed: true,
#     swimming_pool: true,
#     leasing_launch_date: '10/25/2021',
#     listing_agent: 'Tara Group LLC'
# )

# l8file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room8.jpg')
# l8file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
# l8file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
# l8.photos.attach(io: l8file1, filename: 'bed_room.jpg')
# l8.photos.attach(io: l8file2, filename: 'bath_room.jpg')
# l8.photos.attach(io: l8file3, filename: 'living_room.jpg')


# #####

# l9 = Listing.create!(
#     address: "250 Academy Pl, Staten Island NY 10301",
#     area: "Staten Island",
#     neighborhood: "St.George",
#     latitude: 40.644957, 
#     longitude: -74.079299,
#     category: "rental",
#     price: 1800,
#     bedrooms: 2,
#     baths: 1,
#     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Sed elementum tempus egestas sed sed. Vel facilisis volutpat est velit egestas dui id ornare. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dolor purus non enim praesent elementum facilisis leo vel. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Adipiscing enim eu turpis egestas. Quam pellentesque nec nam aliquam sem. A erat nam at lectus urna duis. Platea dictumst vestibulum rhoncus est. Massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed velit. Pellentesque id nibh tortor id aliquet lectus proin. Tempor id eu nisl nunc. Mattis ullamcorper velit sed ullamcorper.",
#     square_feet: 600,
#     dollars_per_sq_ft: 133,
#     broker_fee: false,
#     outdoor_space: true,
#     dishwasher: true,
#     washer_dryer_in_unit: true,
#     washer_dryer_in_building: true,
#     guarantors_accepted: true,
#     furnished: true,
#     fireplace: true,
#     central_air: true,
#     city_view: true,
#     park_view: false,
#     skyline_view: false,
#     water_view: false,
#     elevator: false,
#     doorman: false,
#     gym: false,
#     garage_parking: true,
#     pets_allowed: true,
#     swimming_pool: false,
#     leasing_launch_date: '10/25/2021',
#     listing_agent: 'Villanova Estates'
# )

# l9file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room.jpg')
# l9file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
# l9file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
# l9.photos.attach(io: l9file1, filename: 'bed_room.jpg')
# l9.photos.attach(io: l9file2, filename: 'bath_room.jpg')
# l9.photos.attach(io: l9file3, filename: 'living_room.jpg')

# l10 = Listing.create!(
#     address: "94 St Mary St, Yonkers NY 10701",
#     area: "Bronx",
#     neighborhood: "Yonkers",
#     latitude: 40.930034, 
#     longitude: -73.902432,
#     category: "rental",
#     price: 1800,
#     bedrooms: 1,
#     baths: 1,
#     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Sed elementum tempus egestas sed sed. Vel facilisis volutpat est velit egestas dui id ornare. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dolor purus non enim praesent elementum facilisis leo vel. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Adipiscing enim eu turpis egestas. Quam pellentesque nec nam aliquam sem. A erat nam at lectus urna duis. Platea dictumst vestibulum rhoncus est. Massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed velit. Pellentesque id nibh tortor id aliquet lectus proin. Tempor id eu nisl nunc. Mattis ullamcorper velit sed ullamcorper.",
#     square_feet: 360,
#     dollars_per_sq_ft: 133,
#     broker_fee: true,
#     outdoor_space: true,
#     dishwasher: false,
#     washer_dryer_in_unit: true,
#     washer_dryer_in_building: true,
#     guarantors_accepted: true,
#     furnished: true,
#     fireplace: true,
#     central_air: true,
#     city_view: false,
#     park_view: false,
#     skyline_view: false,
#     water_view: false,
#     elevator: false,
#     doorman: false,
#     gym: false,
#     garage_parking: false,
#     pets_allowed: true,
#     swimming_pool: false,
#     leasing_launch_date: '10/25/2021',
#     listing_agent: 'Prominent Group'
# )

# l10file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room2.jpg')
# l10file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
# l10file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
# l10.photos.attach(io: l10file1, filename: 'bed_room.jpg')
# l10.photos.attach(io: l10file2, filename: 'bath_room.jpg')
# l10.photos.attach(io: l10file3, filename: 'living_room.jpg')

# l11 = Listing.create!(
#     address: "McLean Lot, 223 Bloomfield St, Hoboken NJ 07030",
#     area: "New Jersey",
#     neighborhood: "Hoboken",
#     latitude: 40.742237, 
#     longitude: -74.026805,
#     category: "rental",
#     price: 4000,
#     bedrooms: 2,
#     baths: 1,
#     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Sed elementum tempus egestas sed sed. Vel facilisis volutpat est velit egestas dui id ornare. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dolor purus non enim praesent elementum facilisis leo vel. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Adipiscing enim eu turpis egestas. Quam pellentesque nec nam aliquam sem. A erat nam at lectus urna duis. Platea dictumst vestibulum rhoncus est. Massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed velit. Pellentesque id nibh tortor id aliquet lectus proin. Tempor id eu nisl nunc. Mattis ullamcorper velit sed ullamcorper.",
#     square_feet: 500,
#     dollars_per_sq_ft: 133,
#     broker_fee: true,
#     outdoor_space: true,
#     dishwasher: true,
#     washer_dryer_in_unit: true,
#     washer_dryer_in_building: true,
#     guarantors_accepted: true,
#     furnished: true,
#     fireplace: true,
#     central_air: true,
#     city_view: true,
#     park_view: true,
#     skyline_view: true,
#     water_view: true,
#     elevator: true,
#     doorman: true,
#     gym: true,
#     garage_parking: true,
#     pets_allowed: true,
#     swimming_pool: true,
#     leasing_launch_date: '10/25/2021',
#     listing_agent: 'OOP Estates'
# )

# l11file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room3.jpg')
# l11file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
# l11file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
# l11.photos.attach(io: l11file1, filename: 'bed_room.jpg')
# l11.photos.attach(io: l11file2, filename: 'bath_room.jpg')
# l11.photos.attach(io: l11file3, filename: 'living_room.jpg')

# l12 = Listing.create!(
#     address: "Plaza 5, Jersey City NJ 07302",
#     area: "New Jersey",
#     neighborhood: "Jersey City",
#     latitude: 40.718179, 
#     longitude: -74.034741,
#     category: "rental",
#     price: 3600,
#     bedrooms: 1,
#     baths: 1,
#     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Sed elementum tempus egestas sed sed. Vel facilisis volutpat est velit egestas dui id ornare. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dolor purus non enim praesent elementum facilisis leo vel. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Adipiscing enim eu turpis egestas. Quam pellentesque nec nam aliquam sem. A erat nam at lectus urna duis. Platea dictumst vestibulum rhoncus est. Massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed velit. Pellentesque id nibh tortor id aliquet lectus proin. Tempor id eu nisl nunc. Mattis ullamcorper velit sed ullamcorper.",
#     square_feet: 1000,
#     dollars_per_sq_ft: 133,
#     broker_fee: true,
#     outdoor_space: true,
#     dishwasher: true,
#     washer_dryer_in_unit: true,
#     washer_dryer_in_building: true,
#     guarantors_accepted: true,
#     furnished: true,
#     fireplace: false,
#     central_air: true,
#     city_view: true,
#     park_view: true,
#     skyline_view: true,
#     water_view: true,
#     elevator: true,
#     doorman: true,
#     gym: true,
#     garage_parking: true,
#     pets_allowed: true,
#     swimming_pool: false,
#     leasing_launch_date: '10/25/2021',
#     listing_agent: 'Harborside Group'
# )

# l12file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room4.jpg')
# l12file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
# l12file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
# l12.photos.attach(io: l12file1, filename: 'bed_room.jpg')
# l12.photos.attach(io: l12file2, filename: 'bath_room.jpg')
# l12.photos.attach(io: l12file3, filename: 'living_room.jpg')


# ##########

# l13 = Listing.create!(
#     address: "457 W 51st St, New York NY 10019",
#     area: "Manhattan",
#     neighborhood: "Hell's Kitchen",
#     latitude: 40.765396, 
#     longitude: -73.990339,
#     category: "rental",
#     price: 2700,
#     bedrooms: 1,
#     baths: 1,
#     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Sed elementum tempus egestas sed sed. Vel facilisis volutpat est velit egestas dui id ornare. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dolor purus non enim praesent elementum facilisis leo vel. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Adipiscing enim eu turpis egestas. Quam pellentesque nec nam aliquam sem. A erat nam at lectus urna duis. Platea dictumst vestibulum rhoncus est. Massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed velit. Pellentesque id nibh tortor id aliquet lectus proin. Tempor id eu nisl nunc. Mattis ullamcorper velit sed ullamcorper.",
#     square_feet: 600,
#     dollars_per_sq_ft: 133,
#     broker_fee: true,
#     outdoor_space: true,
#     dishwasher: true,
#     washer_dryer_in_unit: true,
#     washer_dryer_in_building: true,
#     guarantors_accepted: true,
#     furnished: true,
#     fireplace: true,
#     central_air: true,
#     city_view: true,
#     park_view: false,
#     skyline_view: true,
#     water_view: false,
#     elevator: true,
#     doorman: true,
#     gym: true,
#     garage_parking: true,
#     pets_allowed: false,
#     swimming_pool: false,
#     leasing_launch_date: '10/25/2021',
#     listing_agent: 'Carnegie Realty'
# )

# l13file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room5.jpg')
# l13file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
# l13file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
# l13.photos.attach(io: l13file1, filename: 'bed_room.jpg')
# l13.photos.attach(io: l13file2, filename: 'bath_room.jpg')
# l13.photos.attach(io: l13file3, filename: 'living_room.jpg')

# l14 = Listing.create!(
#     address: "335 5th St, Brooklyn NY 11215",
#     area: "Brooklyn",
#     neighborhood: "Park Slope",
#     latitude: 40.670824, 
#     longitude: -73.982234,
#     category: "rental",
#     price: 3000,
#     bedrooms: 3,
#     baths: 1,
#     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Sed elementum tempus egestas sed sed. Vel facilisis volutpat est velit egestas dui id ornare. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dolor purus non enim praesent elementum facilisis leo vel. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Adipiscing enim eu turpis egestas. Quam pellentesque nec nam aliquam sem. A erat nam at lectus urna duis. Platea dictumst vestibulum rhoncus est. Massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed velit. Pellentesque id nibh tortor id aliquet lectus proin. Tempor id eu nisl nunc. Mattis ullamcorper velit sed ullamcorper.",
#     square_feet: 500,
#     dollars_per_sq_ft: 133,
#     broker_fee: true,
#     outdoor_space: true,
#     dishwasher: true,
#     washer_dryer_in_unit: false,
#     washer_dryer_in_building: true,
#     guarantors_accepted: true,
#     furnished: true,
#     fireplace: false,
#     central_air: true,
#     city_view: true,
#     park_view: true,
#     skyline_view: true,
#     water_view: false,
#     elevator: false,
#     doorman: true,
#     gym: false,
#     garage_parking: true,
#     pets_allowed: true,
#     swimming_pool: false,
#     leasing_launch_date: '10/25/2021',
#     listing_agent: 'J.J Group'
# )

# l14file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room6.jpg')
# l14file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
# l14file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
# l14.photos.attach(io: l14file1, filename: 'bed_room.jpg')
# l14.photos.attach(io: l14file2, filename: 'bath_room.jpg')
# l14.photos.attach(io: l14file3, filename: 'living_room.jpg')

# l15 = Listing.create!(
#     address: "101 W 129th St, New York NY 10027",
#     area: "Manhattan",
#     neighborhood: "Harlem",
#     latitude: 40.810780, 
#     longitude: -73.944697,
#     category: "rental",
#     price: 2400,
#     bedrooms: 2,
#     baths: 1,
#     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Sed elementum tempus egestas sed sed. Vel facilisis volutpat est velit egestas dui id ornare. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dolor purus non enim praesent elementum facilisis leo vel. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Adipiscing enim eu turpis egestas. Quam pellentesque nec nam aliquam sem. A erat nam at lectus urna duis. Platea dictumst vestibulum rhoncus est. Massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed velit. Pellentesque id nibh tortor id aliquet lectus proin. Tempor id eu nisl nunc. Mattis ullamcorper velit sed ullamcorper.",
#     square_feet: 400,
#     dollars_per_sq_ft: 133,
#     broker_fee: true,
#     outdoor_space: true,
#     dishwasher: true,
#     washer_dryer_in_unit: true,
#     washer_dryer_in_building: true,
#     guarantors_accepted: true,
#     furnished: true,
#     fireplace: true,
#     central_air: true,
#     city_view: false,
#     park_view: true,
#     skyline_view: false,
#     water_view: false,
#     elevator: true,
#     doorman: false,
#     gym: false,
#     garage_parking: false,
#     pets_allowed: true,
#     swimming_pool: false,
#     leasing_launch_date: '10/25/2021',
#     listing_agent: 'Sparta Associates'
# )

# l15file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room7.jpg')
# l15file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
# l15file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
# l15.photos.attach(io: l15file1, filename: 'bed_room.jpg')
# l15.photos.attach(io: l15file2, filename: 'bath_room.jpg')
# l15.photos.attach(io: l15file3, filename: 'living_room.jpg')

# l16 = Listing.create!(
#     address: "640 Park Ave, New York NY 10065",
#     area: "Manhattan",
#     neighborhood: "Upper East Side",
#     latitude: 40.767784, 
#     longitude: -73.967077,
#     category: "rental",
#     price: 7000,
#     bedrooms: 3,
#     baths: 2,
#     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Sed elementum tempus egestas sed sed. Vel facilisis volutpat est velit egestas dui id ornare. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dolor purus non enim praesent elementum facilisis leo vel. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Adipiscing enim eu turpis egestas. Quam pellentesque nec nam aliquam sem. A erat nam at lectus urna duis. Platea dictumst vestibulum rhoncus est. Massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed velit. Pellentesque id nibh tortor id aliquet lectus proin. Tempor id eu nisl nunc. Mattis ullamcorper velit sed ullamcorper.",
#     square_feet: 1200,
#     dollars_per_sq_ft: 133,
#     broker_fee: true,
#     outdoor_space: true,
#     dishwasher: true,
#     washer_dryer_in_unit: true,
#     washer_dryer_in_building: true,
#     guarantors_accepted: true,
#     furnished: true,
#     fireplace: true,
#     central_air: true,
#     city_view: true,
#     park_view: true,
#     skyline_view: true,
#     water_view: false,
#     elevator: true,
#     doorman: true,
#     gym: true,
#     garage_parking: true,
#     pets_allowed: true,
#     swimming_pool: true,
#     leasing_launch_date: '10/25/2021',
#     listing_agent: 'Pierre Homes'
# )

# l16file1 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bed_room8.jpg')
# l16file2 = URI.open('https://identistreet-seeds.s3.amazonaws.com/bath_room.jpg')
# l16file3 = URI.open('https://identistreet-seeds.s3.amazonaws.com/living_room.jpg')
# l16.photos.attach(io: l16file1, filename: 'bed_room.jpg')
# l16.photos.attach(io: l16file2, filename: 'bath_room.jpg')
# l16.photos.attach(io: l16file3, filename: 'living_room.jpg')