DROP TABLE IF EXISTS items CASCADE;
CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  item_name VARCHAR(255) NOT NULL,
  item_type VARCHAR (255),
  created_at TIMESTAMP DEFAULT current_timestamp,
  total_quantity INTEGER,
  cost INTEGER
);



