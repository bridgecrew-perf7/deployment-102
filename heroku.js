const express=require("express");
const dotenv=require("dotenv").config();
const app=express();



app.get("/",(req,res)=>{
    res.send("my first deployment");
})
app.get("*",(req,res)=>{
    res.send("the page is not working");
});


const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`app is liteningon:${PORT}`);
})




