USE mushroom_log;



-- first, insert/ignore the type

START TRANSACTION;
insert ignore into types (name)
 VALUES ('animal');
INSERT INTO species (name, type_id)
  VALUES (
    'platypus',
    (SELECT id FROM types WHERE types.name = 'animal'));
SET @species_id_to_use = LAST_INSERT_ID();
INSERT INTO places_species
  VALUES (
    (SELECT id FROM places where places.name = 'peters rock park'),
    @species_id_to_use);
COMMIT;


select * from species;
select * from types;