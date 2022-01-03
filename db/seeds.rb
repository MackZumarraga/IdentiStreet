# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all

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