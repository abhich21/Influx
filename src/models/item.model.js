const mongoose = require("mongoose")

const itemSchema = mongoose.Schema({
    code: { type: Number, required: true },
    name: { type: String, required: true },
    unitPrice: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    })

const itemsModel = mongoose.model("item", itemSchema)

module.exports = itemsModel;