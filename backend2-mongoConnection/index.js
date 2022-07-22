const express = require("express");
const app = express();
const mongoClient = require("mongodb").MongoClient;
app.listen(8000,()=>{
    console.log("Server started on port 8000");
    mongoClient.connect("mongodb://localhost:27017/wikiDB",(err,client)=>{
        if(err) throw err;
        console.log("Database Connected");
        const db = client.db("wikiDB");
        db.collection("articles").find().toArray((err,result)=>{
            if(err) throw err;
            console.log(result);
        })
    })
})