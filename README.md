# Project-ExJS-Postgres
How to run:  
1. `npm install` to install all the dependencies
2. Create database and user in postgres:
```
psql -U postgres
CREATE USER new_user WITH PASSWORD 'new_password';
CREATE DATABASE new_database;
\c new_database postgres
GRANT ALL ON SCHEMA public TO new_user;
```
(Note that the username, password and database name should match the development ones in the config.json file)  

3. `npx sequelize db:seed:all` to populate the database with some data