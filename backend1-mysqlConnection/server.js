var express = require("express");
var app = express();
const mysql = require("mysql");
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Siddharth@10',
    database : 'university'
});
app.listen(8000,()=>{
    console.log("app running on port 8000");
    connection.connect(err=>{
        if(err) throw err;
        console.log("Database Connected");
    });
    connection.query("SELECT * FROM STD" , (err,rows,fields) =>{
        if(err) throw err ;
        console.log("The result is" , rows);
    })
    connection.end();
});