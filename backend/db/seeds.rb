# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

UserCreateArray = [{name: 'HR', email: 'hr@sample.com', user_type: 'HR', password: 'demo1234'},
                   {name: 'Employee', email: 'employee@sample.com', user_type: 'EMPLOYEE', password: 'demo1234'}]
User.create(UserCreateArray)