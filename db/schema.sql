DROP DATABASE IF EXISTS etb_db;
CREATE DATABASE etb_db;
USE etb_db;
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR(30),
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    email VARCHAR(30),
    password VARCHAR(30)
);
CREATE TABLE review (
    id INT PRIMARY KEY AUTO_INCREMENT,
    reviewBody VARCHAR(300),
    foodRating INT,
    locationRating INT,
    overallRating INT,
    userID INT,
    FOREIGN KEY (userID)
    REFERENCES user(id)
    ON DELETE SET NULL
);