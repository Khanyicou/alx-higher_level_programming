-- Displays the max temperature of each state, ordered by state name.
-- DDL query that displays the max temperature of each state, stored by state
SELECT `state`, MAX(`value`) AS `max_temp`
FROM `temperatures`
GROUP BY `state`
ORDER BY `state`;
