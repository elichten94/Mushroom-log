DROP DATABASE IF EXISTS mushroom_log;
CREATE DATABASE mushroom_log;
USE mushroom_log;


CREATE TABLE types (
  id INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) UNIQUE NOT NULL,

  PRIMARY KEY(id)
);

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
 -- techdebt: use an enum
 `type_id` INT NOT NULL,

  PRIMARY KEY(id),
  FOREIGN KEY(`type_id`)
    REFERENCES types(id)
);

CREATE TABLE places_species (
  place_id INT NOT NULL,
  species_id INT NOT NULL,

  FOREIGN KEY(place_id)
    REFERENCES places(id),
  FOREIGN KEY(species_id)
    REFERENCES species(id)
);

-- prepopulate
INSERT INTO types (name)
  VALUES
    ('fungi'),
    ('plant');

INSERT INTO places (name, lat, lng)
  VALUES
    ('Presidio', 37.79032991926543, -122.46569269829364),
    ('Golden Gate', 37.770946373962055, -122.48292118407657),
    ('Elk Glen', 37.767754870162044, -122.48068188610866);

INSERT INTO species (name, type_id)
  VALUES
    ('diminutive morels', 1),
    ('jack in the pulpit', 2),
    ('ramps', 2),
    ('wild garlic', 2);

INSERT INTO places_species
  VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (2, 1),
    (3, 4);


