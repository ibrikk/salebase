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

  //Post items
  const postItems = (req) => {
    const sql = `INSERT INTO items (item_name, total_quantity, cost) VALUES ($1, $2, $3);`;
    console.log(sql);
    const params = [
      req.item_name,
      parseInt(req.total_quantity),
      parseInt(req.cost),
    ];
    return db
      .query(sql, params)

      .then((result) => result.rows)
      .catch((err) => err);
  };

  // Update items
  const putItems = (req) => {
    const sql = `UPDATE items SET item_name = '${req.item_name}',
    total_quantity = '${parseInt(req.total_quantity)}', cost='${parseInt(
      req.cost
    )}'
     WHERE id = '${req.id}'; `;
    // const params = [req.item_name, req.item_type, parseInt(req.total_quantity), parseInt(req.cost)]
    return db
      .query(sql)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  // Get all vendors based on vendor name
  const getVendors = () => {
    const sql = { text: `SELECT id, vendor_name FROM vendors;` };

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

  //Get all item assignment info: FETCH
  const getInventoryAssignments = () => {
    const sql = {
      text: `SELECT * FROM order_items;`,
    };
    return db
      .query(sql)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  //Post an inventory item
  const postInventoryAssignments = (req) => {
    const sql = `INSERT INTO order_items (item_id, vendor_id, assigned_quantity, price, order_date) VALUES($1, $2, $3, $4, $5);`;
    const params = [
      parseInt(req.item_id),
      parseInt(req.vendor_id),
      parseInt(req.assigned_quantity),
      parseInt(req.price),
      req.order_date,
    ];
    return db
      .query(sql, params)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  //Get item assignment info for the Assignment Page
  const joinedInventoryAssignments = () => {
    const sql = {
      text: `SELECT order_items.item_id, SUM(order_items.assigned_quantity), items.item_name, items.total_quantity FROM items INNER JOIN order_items ON order_items.item_id=items.id GROUP BY item_id, item_name, total_quantity;`,
    };
    return db
      .query(sql)
      .then((result) => result.rows)
      .catch((err) => err);

  };


  //Get top-selling items for the Business Intelligence Page
  const getTopItemsBI = () => {
    const sql = {
      text: `SELECT SUM(order_items.assigned_quantity), items.item_name
      FROM items
      INNER JOIN order_items
      ON order_items.item_id=items.id
      GROUP BY item_name
      ORDER BY sum DESC
      LIMIT 5;`,
    };

    return db
      .query(sql)
      .then((result) => result.rows)
      .catch((err) => err);
  };


  //Get top neighbourhoods
  const getTopNeighborhood = () => {
    const sql = {
      text: `SELECT SUM(order_items.assigned_quantity), vendors.city_name
      FROM vendors
      INNER JOIN order_items
      ON order_items.vendor_id=vendors.id
      GROUP BY city_name
      ORDER BY sum DESC
      LIMIT 5;`
    }
  }

  return {
    getItems,
    postItems,
    getVendors,
    getOrders,
    getItemsByVendor,
    getInventoryAssignments,
    postInventoryAssignments,
    joinedInventoryAssignments,
    putItems,
    getTopItemsBI,
    getTopNeighborhood
  };
};
