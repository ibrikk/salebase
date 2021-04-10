module.exports = (db) => {
  const getItems = () => {
    const sql = { text: `SELECT * FROM items;` };

    return db
      .query(sql)
      .then((result) => console.log(result))
      .catch((err) => err);
  };

  const getVendors = () => {
    const sql = { text: `SELECT * FROM vendors;` };

    return db
      .query(sql)
      .then((result) => console.log(result))
      .catch((err) => err);
  };
  return { getItems };
};

//   const getOrders = () => {
//     const sql = { text: `SELECT * FROM order_items;` };

//     return db
//       .query(sql)
//       .then((result) => console.log(result))
//       .catch((err) => err);
//   };

const deleteItem = (coffeeName) => {
  const sql = {
    text: `SELECT id FROM items
                INNER JOIN item_id ON order_items;`,
  };
  return db.query(sql).then((res) => {
    //if rows are empty
    if (sql) {
      console.log(`Cannot delete. Item is in already assigned!!!`);
    } else {
      const deleteSql = `DELETE FROM items WHERE id = $1`;
      //return db.query
    }
  });
};

//   //   const result = query.exec()
//   //   if(result){
//   //   throw error
//   //   }
//   //   else{
//   //   delete coffee
//   //   }
// //   }

//     const getAssignedItems = () => {
//     const sql = ``
//   }

//   return {
//     getItems,
//     getVendors,
//     getOrders,
//     deleteItem,
//     getAssignedItems,
//   };;
