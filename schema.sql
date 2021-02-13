CREATE IF NOT EXISTS movieDatabase;

USE movieDatabase;

CREATE TABLE movieTable (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    movieTitle VARCHAR(100) NOT NULL, 
    watched-? BOOLEAN NOT NULL DEFAULT 0, 
    releaseYear TEXT,
    metascore TEXT, 
    IMBDrating TEXT 
);