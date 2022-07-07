const express = require("express");

const Cart = require("../models/cart.model");

const router = express.Router();

router.post("", async (req, res) => {
    try {
        const cart = await Cart.create(req.body).populate("orderId");

        return res.status(200).send(cart);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

router.get("", async(req,res)=>{
    try {
        const carts = await Cart.find().lean().exec();
        //  console.log(req.body)
        return res.status(200).send(carts);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})


module.exports = router;