const mysql=require(`mysql`);
const express=require(`express`);
const bodyParser=require(`body-parser`);

var app=express();
app.use(bodyParser.json());