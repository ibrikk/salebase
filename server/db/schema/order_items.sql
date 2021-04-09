CREATE TABLE "order_items" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "item_id" INTEGER REFERENCES items(id) ON DELETE CASCADE,
  "vendor_id" INTEGER REFERENCES vendors(id) ON DELETE CASCADE,
  "assigned_quantity" INTEGER NOT NULL,
  "price" INTEGER NOT NULL,
  "order_date" DATE NOT NULL,
);
