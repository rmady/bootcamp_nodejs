/**
 * BairesDev NodeJS Bootcamp level 6 Exercise 1.
 * Using sequelize create a model named Product, it should contain at least two properties.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

 const mysql = require("mysql");
 
 const conn = mysql.createConnection({
    host:     "localhost",
    user:     "root",
    password: "root",
    database: "level6exe1",
 });

 conn.connect((err) => {
    if (err) throw err;
    console.log("Successfully connected");
    
    // now that we are connected
    const sqlCreateTable  = `CREATE TABLE products (id integer PRIMARY KEY AUTO_INCREMENT, name text not null, description text, price double, color text);`;
    const sqlInsertRecord = `INSERT INTO products (name, price) VALUES ('Phone', 1000)`;
    const sqlSelectAll    = `SELECT * FROM products`;
    
    //crete our table
    conn.query(sqlCreateTable, (err) => {
      if (err) throw err;
      //insert product
      conn.query(sqlInsertRecord, (err) => {
        if (err) throw err;
        //query and log all records
        conn.query(sqlSelectAll, (err, results) => {
          if (err) throw err;
          console.log(results);
        });
      });
    });
});
   