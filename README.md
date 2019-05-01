# Bamazon

The goal was to create an Amazon-like store front using Node.js and MySQL.

## Getting Started

- Clone repo.
- Run command in Terminal or Gitbash 'npm install'
- Run command depending which mode you would like to be on:
    * Customer - 'npm run customer'
    * Manager - 'npm run manager'
    * Exective - 'npm run exective'
- Run 'ctrl + c' to exit each mode

### What Each JavaScript Does

1. `BamazonCustomer.js`

    * Prints the products in the store.
    ![List of Items](assets/images/capture1.PNG) ![List of Items](assets/images/capture2.PNG)

    * Prompts customer which product they would like to purchase by ID number.
    * Once the customer selects the product correctly, prompts for the quantity.
    

      * If there is a sufficient quantity of the product in stock, it will return the total for that purchase.
      ![Order Confirmed](assets/images/capture3.PNG)
      
      
      * However, if there is not enough of the product in stock, it will tell the user that there isn't enough of the product and the           quantity available and let teh user choose the id and quantity again.
      ![Insufficient Quantity](assets/images/capture4.PNG)
      
      * If the purchase goes through, it updates the stock quantity to reflect the purchase in the MySQL database.


## Technologies used
- Node.js
- Inquire NPM Package (https://www.npmjs.com/package/inquirer)
- MYSQL NPM Package (https://www.npmjs.com/package/mysql)


## Built With

* VS Code - Text Editor
* MySQLWorkbench
* Terminal/Gitbash

## Authors

* **Manav Patel**
