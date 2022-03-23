DROP DATABASE IF EXISTS movielist;
CREATE DATABASE movielist;
USE movielist;

DROP TABLE IF EXISTS movies;
CREATE TABLE movies(
  id INT,
  title VARCHAR(280) DEFAULT NULL,
  vote_average FLOAT DEFAULT NULL,
  release_date VARCHAR(280) DEFAULT NULL,
  is_watched BOOLEAN DEFAULT FALSE
);