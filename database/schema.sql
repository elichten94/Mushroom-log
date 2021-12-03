DROP DATABASE IF EXISTS mushroom_log;
CREATE DATABASE mushroom_log;
USE mushroom_log;


CREATE TABLE types (
  id INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20),

  PRIMARY KEY(id)
);


CREATE TABLE places (
  id INT NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(100),
-- techdebt: coordinates VARCHAR(100)

 PRIMARY KEY(id)
);

CREATE TABLE species (
  id INT NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(50),
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

INSERT INTO places (name)
  VALUES
    ('peters rock park'),
    ('north farms park'),
    ('somme woods');

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


