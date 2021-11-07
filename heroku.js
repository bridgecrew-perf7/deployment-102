const express=require("express"),
app=express();
const dotenv=require("dotenv").config();
const PORT=process.env.PORT;



app.get("/",(req,res)=>{
    res.send("my first deployment");
})
app.get("*",(req,res)=>{
    res.send("the page is not working");
});

app.listen(PORT,()=>{
    console.log(`app is liteningon:${PORT}`);
})




