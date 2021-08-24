
const express=require(`express`);
const bodyParser=require(`body-parser`);

const mysqlConnection=require("./connection");
const drugRoutes=require("./routes/drug");


var app=express();
app.use(bodyParser.json());
app.use("/drug",drugRoutes);

app.listen(3000,function(){
    console.log("Server listening on 3000");
})