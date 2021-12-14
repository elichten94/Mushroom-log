DROP DATABASE IF EXISTS mushroom_log;
CREATE DATABASE mushroom_log;
USE mushroom_log;


-- CREATE TABLE types (
--   id INT NOT NULL AUTO_INCREMENT,
--   `name` VARCHAR(20) UNIQUE NOT NULL,

--   PRIMARY KEY(id)
-- );

CREATE TABLE places (
  id INT NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(100) NOT NULL,
 lat DECIMAL(18, 15),
 lng DECIMAL(18, 15),

 PRIMARY KEY(id)
);

CREATE TABLE species (
  id INT NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(50) NOT NULL,
 -- techdebt: use a `type` field for animal, plant etc;

  PRIMARY KEY(id)
);

CREATE TABLE places_species (
  place_id INT NOT NULL,
  species_id INT NOT NULL,
  `description` VARCHAR(500) DEFAULT '',

  FOREIGN KEY(place_id)
    REFERENCES places(id),
  FOREIGN KEY(species_id)
    REFERENCES species(id)
);

