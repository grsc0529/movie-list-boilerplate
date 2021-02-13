CREATE DATABASE IF NOT EXISTS movieDatabase;

USE movieDatabase;

CREATE TABLE movieTable (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    movieTitle VARCHAR(100) NOT NULL, 
    watched BOOLEAN NOT NULL DEFAULT 0, 
    releaseYear VARCHAR(100) DEFAULT 'no information inputted',
    metascore VARCHAR(100) DEFAULT 'no information inputted', 
    IMBDrating VARCHAR(100) DEFAULT 'no information inputted'
);