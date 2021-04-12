//TYPES OF QUERIES:

//Get top products overall
//Get top products for a given month
//Get top vendor (the one who has the most order_items)
//Get top month

module.exports = (db) => {
  //Get all items based on item id
  const getItems = () => {
    const sql = { text: `SELECT * FROM items;` };
    // const sql = { text: `SELECT * FROM items WHERE id=$1;` };

    return db
      .query(sql)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  // Get all vendors based on vendor name
  const getVendors = () => {
    const sql = { text: `SELECT * FROM vendors WHERE vendor_name = $1;` };

    return db
      .query(sql)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  //Get all orders
  const getOrders = () => {
    const sql = { text: `SELECT * FROM order_items;` };

    return db
      .query(sql)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  //Get all item info  for a given vendor: FETCH
  const getItemsByVendor = () => {
    const sql = {
      text: `SELECT items.*, vendors.vendor_name
    FROM items
    JOIN order_items ON items.id = order_items.item_id
    JOIN vendors ON order_items.vendor_id = vendors.id
    WHERE vendors.id = $1;`,
    };
    return db
      .query(sql)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  return { getItems, getVendors, getOrders, getItemsByVendor };
};
