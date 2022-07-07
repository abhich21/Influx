const Item = require("../models/item.model")
const express = require("express")
const router = express.Router()

router.post("", async (req, res) => {
    try {
        let item = await Item.create(req.body);

        return res.status(200).send({ item});
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});


module.exports = router;