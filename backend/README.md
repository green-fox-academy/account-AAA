#JSAP-10: Database migration setup  
#JSAP-20:  Extend Deposit account creation with database

# Backend Preparation
Note: if you haven't run ``` $ npm run install-all``` in the repo level, run ``` $ npm install``` under backend to install all dependacies.

## 1. Create Local database through terminal or MySQLWorkbench
  ```sql
    CREATE DATABASE IF NOT EXISTS JSABANK;
  ```
## 2. Configure .env file
**Make sure you are at backend folder**

.env file is not tracked in github for security purpose, create your own .env file under backend folder in the development phase.  
This Step should only be needed for once
  ```
    MYSQL_HOST=your_host
    MYSQL_USER_NAME=your_username
    MYSQL_PASSWORD=your_password
    MYSQL_DATABASE=JSABANK
  ```

## 3. Run migration scripts for table creation
This step to guraantee the same table structure and test accounts data is used.
  ```bash
    $ npm run dbRefresh 
  ```

# Optional DB setup
This part is about how to create new mysql-migration scripts, it is helpful if you might need to  
 1. add more tables.
 2. add more testing seeds.
 3. update current seeds.

## Create new table
```bash
  $ npm run createTable -- tableName
```
Note: There are spaces around '--' and tableName!!!

This creates a file ends with the tableName inside migrations folder, where you can add your queries.

'UP' should contain the mysql query to create table and 'DOWN' for dropping table.

## Add seed
  ```bash
    $ npm run addSeed -- tableName
  ```
Note: There are spaces around '--' as well.

This command also creates a file ends with the tableName inside migrations folder. Complete 'UP' fir your action and 'down' for the reverse action.

## Refreshing Migrations
  ```bash
    $ npm run dbRefresh 
  ```
This command will help you drop all data and update with new ones by running all the sql query which paired up with 'UP' key inside the file you created above.

[Check more detail about mysql-migrations](https://www.npmjs.com/package/mysql-migrations)

# Available endpoints
- Get all accounts under specifc userId.
  ```
    GET /deposit/:userId
  ```
- Add new account
  ```
    POST /deposit
  ```


# PM2 deploy 

Our public address is http://3.112.128.181:3000

How to use PM2 deploy 

use the following command under backend folder

  ```bash
    $ npm run deploy
  ```
This command help you deploy your backend on aws
After you typed this command you can copy and paste our public address which shows up and add end point to check if it is success or not.

  ```bash
    $ npm run restart
  ```
This command help you restart our server.
