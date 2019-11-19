#JSAP-10
Database migration setup

## How mysql migration works
make sure you are at backend folder

# Initiate a migration
```bash
$ npm run createTable -- <your table name>
```
Note: There is a space between '--' and your table name!!!

This command will create a file start with numbers inside migrations folder
remember this name

'UP' should fill in the mysql query to create table and 'DOWN' is drop table.

# Add seed
```bash
$ npm run addSeed -- <table name which you created by above command>
```
Note: There is a space between '--' and your table name!!!

This command will help insert or update the table data.
'UP' for insert or update sql query, 'down' for remove data query.

# Refreshing Migrations
```bash
$ npm run dbRefresh 
```
This command will help you drop all data and update with new ones by running all the sql query which paired up with 'UP' key inside the file you created above.

[Check more detail about mysql-migrations](https://www.npmjs.com/package/mysql-migrations)

.env:
- MYSQL_HOST: database hostname
- MYSQL_USER_NAME: database username
- MYSQL_PASSWORD: database password
- MYSQL_DATABASE: which database do you use

***
### PM2 deploy 

Our public address is http://3.112.214.248:3000

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