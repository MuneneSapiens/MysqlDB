# creating connection object

var mysqlConnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"somepassword",
    database: "db1",
    multipleStatements:true
});