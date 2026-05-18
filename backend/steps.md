<!-- Steps to setup the project -->
# Blog Project Setup
1. setup frontend with tailwind css
    
2. setup backend with express and database connection
    [package :  
    - express
    - mongoose
    - bcrypt
    - dotenv
    - jsonwebtoken]
   

3. setup database connection and create user model
[package : mongoose]
    - install mongodb and create a database
    - install mongoose connect to the database 
        - function connectDB()
    - connect to the database in the backend

4. crete a schema and model for the user 
    [package : validator]
    schema with name, email and password fields
5. Create a user controller 
    - get data from req.body
    - validate the data 
    - password hashing with bcrypt
    - create the user 
6. create a route for user registration 
    - POST /api/users/register
    - call the user controller function
7. hash password before saving to the database
    - use bcrypt to hash the password before saving the user to the database
8. create token and send it to the client
    - use cookies to store the token in the client