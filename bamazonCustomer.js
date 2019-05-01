const inquirer = require("inquirer");
const mysql = require("mysql");

require('dotenv').config()

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.db_pass,
  database: "greatbay_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  promptStart();
});

function promptStart() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;

    res.forEach(products => {

      console.log(
        "Product ID: " + products.id + "\n" + "Product Name: " + products.product_name + "\n" + "Department Name: " + products.department_name + "\n" + "Product Price: " + products.price + "\n"
      )

    });
    selectProduct();
  });
}

function selectProduct() {

  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;

    inquirer.prompt(
      [{
          name: "selected_id",
          type: "number",
          message: "Please enter the ID of the item you would like to purchase: ",
          validate: function (input) {
            if (!isNaN(input) && (input > 0 && input < 11)) {
              return true;
            } else {
              return "Please enter a valid ID number from 1 to 11."
            }
          }
        },
        {
          name: "selected_qty",
          type: "number",
          message: "Please enter the number of selected product you would like to buy: ",
          validate: function (input) {
            if (!isNaN(input) && (input > 0)) {
              return true;
            } else {
              return "Invalid entry.Please enter the number of selected product you would like to buy: "
            }
          }
        }
      ]).then(function (check_qty) {

      var requested_product_id = check_qty.selected_id;

      var requested_product = res.find(products => products.id == requested_product_id);

      var requested_product_name = requested_product.product_name;

      var requested_qty = check_qty.selected_qty;

      var available_qty = requested_product.stock_quantity;

      if (available_qty >= requested_qty) {
        console.log(
          "Congratulations, your order of " + requested_qty + " " + requested_product_name + " is complete."
        )
        var orderTotal = requested_product.price * requested_qty;
        console.log("Your total is " + orderTotal + ".");
        return updateStock(requested_product, requested_qty);
      } else {
        console.log(
          "Sorry, we do not have " + requested_qty + " of " + requested_product_name + ". We only have " + available_qty + " available in stock."
        )
        return selectProduct();
      }
    })
  })
}

function updateStock(product, quantity) {

  connection.query("UPDATE products SET stock_quantity = ? WHERE id = ?", [(product.stock_quantity - quantity), product.id],
  function(err, res){

    if (err) throw err;

    connection.end();
    
  })
}