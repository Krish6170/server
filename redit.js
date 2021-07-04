const express = require("express")
const path = require("path")
const reddata = require("./data.json")
const app = express()
app.use(express.static('public'))
app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "ejs")
app.get("/r/:subredit", (req, res) => {
    const { subredit } = req.params
    const data = reddata[subredit]
    //try catch can't be used because if the data is undefined the ejs will be compiled wrong .the try catch will  give error ot this js file
    if (data) {
        res.render("redit.ejs", { ...data })

    }
    else { res.send("error") }
    // res.send(data[subredit])
})
app.get("/rand",(req,res)=>{
    const random = Math.floor(Math.random()*10)+1
    res.render("temp2",{random})
})
app.listen(2000, () => {
    console.log("listening...")
})
