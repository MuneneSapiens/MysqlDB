const mysql=require(`mysql`);
//create database connection
var mysqlConnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mysqlsapiens1E",
    database: "bluetester",
    multipleStatements:true
});

mysqlConnection.connect(err=>{
    if(!err){
        console.log("Connection established");
    }else{
        console.log("Connection failed");
    }
});

module.exports =mysqlConnection;