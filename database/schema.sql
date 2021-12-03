CREATE DATABASE IF NOT EXISTS mushroom_log;
USE mushroom_log;

CREATE TABLE places (
  id INT NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(100),
-- techdebt: coordinates VARCHAR(100)

 PRIMARY KEY(id)
);

CREATE TABLE species (
  INT NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(50),
 -- techdebt: use an enum
 `type` VARCHAR(30),

 PRIMARY KEY(id)
);

CREATE TABLE places_species (
  places_id INT NOT NULL,
  species_id INT NOT NULL,

  FOREIGN KEY(places_id)
    REFERENCES places(id),
  FOREIGN KEY(species_id)
    REFERENCES species(id),
);
