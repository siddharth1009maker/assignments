const express = require("express");
const mysql = require("mysql");
const request = require("request");

const app =express();
const url = "https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=10";

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Siddharth@10',
    database : 'joke'
});

//Checking whether the database is connected or not

connection.connect(err=>{
    if(err) console.log("DATABASE CONNECTION FAILED !!" ,err);
    else console.log("CONNECTED TO DATABASE");
});


app.get("/",(req,res)=>{
    res.send("Hi , Siddharth");
});

app.get("/joke/:id",async (req,res)=>{
    var id=req.params.id;
    await connection.query(`SELECT * FROM JOKES WHERE id = ${id}`,(err,row,field)=>{
        if(err) console.log(err);
        else
        {
            console.log(row[0].setup , " ",row[0].delivery);
        }
    })

});

//Fetching the jokes API
app.get("/jokes" , async(req,res)=>{
    await request(url,(err,res,body)=>{
        if(err || res.statusCode != 200)
        {
            console.log("There is something wrong",err);
        }
        let data = JSON.parse(body);
        console.log(data);
        let id = 0 ;
        for(let i = 0 ; i<10 ; i++)
        {
            let currentId = id + 1 ;
            id+=1;
            let setup = data.jokes[i].setup;
            let delivery = data.jokes[i].delivery;
            // console.log(currentId,setup,delivery);
            // console.log(typeof(setup));
            let sql = `INSERT INTO JOKES(id,setup,delivery) VALUES ("${currentId}","${setup}","${delivery}")`;
            // console.log(sql);
            connection.query(sql , (err,rows,fields)=>{
                if(err) throw err;
            });
        }
        connection.end()
    });
})



app.listen(3000,()=>{
    console.log("Server listening on PORT" , 3000);
})
