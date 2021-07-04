const express=require("express")
const app=express()
const path=require("path")
app.listen(2000,()=>{
    console.log("port 2000")
})
app.set("views",path.join(__dirname,"/views"))
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    const random = Math.floor(Math.random()*10)+1
    res.render("temp2",{random})
})