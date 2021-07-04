const express=require("express")
const app =express()
const path =require("path")
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))
// app.use((req,res)=>{
//     res.send("<h1>request accepted<h1>")
// })
app.get("/dogs/:sub",(req,res)=>{
    let {sub}=req.params
    console.dir(req)

    res.send(`<h1>you searched for dogs ${sub} </h1>`)
})
app.get("/",(req,res)=>{
    res.render("temp")
})
app.get("/dogs/:sub/searchs",(req,res)=>{
    let {q}=req.query
    

    res.send(`<h1>you searched for dogs ${q} </h1>`)
})
app.get("/dogs",(req,res)=>{
    res.send("<h1>you searched  Dogs </h1>")
})

app.get("/cats",(req,res)=>{
    res.send("<h1>you searched cats renewed </h1>")
})
app.get("*",(req,res)=>{
    res.send("<h1>you searched for nothing </h1>")
})
app.listen(2000,()=>{console.log("port 2000")})

