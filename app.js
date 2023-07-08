const express=require('express');
const detailsRoute=require('./api/router/details');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

mongoose.connect('mongodb+srv://sankytech12:sasank12@returnx.q5o0lxt.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('error',error=>{
    console.log('connection failed');
})

mongoose.connection.on('connected',connected=>{
    console.log('connected with database.....')
})


app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use('/details',detailsRoute);

app.use((req,res,next)=>{
    res.status(200).json({
        message:"app is runnning"
    })
})
module.exports=app;