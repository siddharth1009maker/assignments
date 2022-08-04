const express = require("express");
const app = express();
var indexRouter = require("./routes/server");
app.use('/',indexRouter);
app.listen(4900,(req,res)=>{
    console.log("Server Running on port 4900");
})