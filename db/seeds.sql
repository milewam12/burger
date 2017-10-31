INSERT INTO burgers (burger_name, devoured) VALUES ("Classic Cheese Burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("South West Burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Bacon Cheese Burger", false);

-- // output the result as true and false

SELECT 
    id, 
    burger_name, 
    IF(devoured, 'true', 'false') devoured
FROM
    burgers;