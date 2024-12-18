const express=require('express');
const app =express();
const PORT =8000;

app.listen(PORT,()=>{
    console.log("run");
    
})

app.use("/api",(req,res)=>{
res.send("running API")
})
