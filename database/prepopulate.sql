USE mushroom_log;

INSERT INTO places (name, lat, lng)
  VALUES
    ('Presidio', 37.79032991926543, -122.46569269829364),
    ('Golden Gate', 37.770946373962055, -122.48292118407657),
    ('Elk Glen', 37.767754870162044, -122.48068188610866),
    ('Somme Woods', 42.14072320372627, -87.82045799023726),
    ('Peters Rock', 41.3391492532253, -72.85588355068786),
    ('Chiply Woods', 42.13422288653528, -87.80317979339077);

INSERT INTO species (name)
  VALUES
    ('Woodchip morels'),
    ('Wild artichoke'),
    ('Nodding onions'),
    ('Canadian garlic'),
    ('Dandelion greens'),
    ('Porcini'),
    ('Wintercress'),
    ('Pale chicken of the woods'),
    ('Half-free morels'),
    ('Ramps');

INSERT INTO places_species
  VALUES
    (1, 1, 'scattered under douglas fir. About 6 feet from base of trunk'),
    (1, 2, ''),
    (2, 3, 'Huge patch!! Taking taking Khai here next time oWo'),
    (2, 1, 'Smaller specimens, come back ~1 week after Feb. rainfalls'),
    (2, 7, ''),
    (3, 4, 'Milder tasting than midwestern plants - come back before cooking pasta for friends'),
    (4, 10, 'Most within 60ft of creek. Look out for poison ivy.'),
    (4, 4, 'Large patches in muddy areas up and down creek'),
    (5, 9, 'First half-free morel find! Robust specimens littered near tulip poplar groves.'),
    (6, 8, '50 ft off the path directly left after crossing river');




