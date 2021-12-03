USE mushroom_log;



-- first, insert/ignore the type

START TRANSACTION;
insert ignore into types (name)
 VALUES ('fungi');
INSERT INTO species (name, type_id)
  VALUES (
    'inky caps',
    (SELECT id FROM types WHERE types.name = 'fungi'));
SET @species_id_to_use = LAST_INSERT_ID();
INSERT INTO places_species
  VALUES (
    (SELECT id FROM places where places.name = 'peters rock park'),
    @species_id_to_use);
COMMIT;



select * from places_species;