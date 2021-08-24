const express =require(`express`);
const Router =express.Router();
const myConnection=require("../connection");

Router.get("/",(req,res)=>{
    myConnection.query("SELECT drugname, strength,drugcat FROM drug  ORDER BY drugname desc Limit 20",(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});


module.exports=Router;