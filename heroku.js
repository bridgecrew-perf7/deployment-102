const express=require("express"),
app=express(),
PORT=8080;
app.listen(PORT,()=>{
    console.log(`app is liteningon:${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("my first deployment");
})





