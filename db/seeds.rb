# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# create! raises an exception if theres an error creating a new instance

# users 
erick = User.create!(name: "Erick Manrique", username: "erck", password_digest: "erick1", email: "erick@manrique.com")

# t-do
delete = Todo.create!(input: "Click me to delete", user: erick)
edit = Todo.create!(input:"Click the pencil to edit this task", user: erick)

# api
default_api = Api.create!(news: true, weather: true, joke: true, quote: true, cat: true, fact: true, crypto: true, food:true, user: erick)

# setting
# POST MVP 
# default_setting = Setting.create(background_color: "#16263E", text_font: "Montserrat", header_font: "Georama", default_theme: true)

