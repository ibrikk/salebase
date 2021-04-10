DROP TABLE IF EXISTS vendors CASCADE;
CREATE TABLE vendors (
 id SERIAL PRIMARY KEY NOT NULL,
vendor_name VARCHAR(225) NOT NULL,
created_at TIMESTAMP DEFAULT current_timestamp,
city_name VARCHAR(225),
adress VARCHAR(225)
);
