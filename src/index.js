const connection=require("./configs/db")
const express=require("express")
const itemController=require("./controllers/item.controller")
const cartController=require("./controllers/cart.controller")

const app=express()
app.use(express.json())

app.use("/item",itemController)
app.use("/cart", cartController)


app.listen(8000, async ()=>{
    try{
        await connection;
        console.log("connected to DB")
    }catch(err){
        console.log("error",err)
    }
    console.log("listening to port 8000")
})