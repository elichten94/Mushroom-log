USE mushroom_log;


insert into places
(name)
  VALUES
  ('')



--     (SELECT CAST(CONCAT('[', GROUP_CONCAT(JSON_OBJECT("id", id, "url", url)), ']') AS JSON)
--       FROM photos
--       WHERE review_id = reviews.id
--     )
--     AS photos
-- FROM reviews
-- WHERE product_id = ?