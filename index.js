const express = require("express")

const app = express()

app.use(express.json())


app.listen (4000, ()=>{
    console.log ("listening to port 5000")


})

app.get ("a/pi", (re, res)=>{
    res.status=  200(
 console.log(  "connected successfully")
    )
} )