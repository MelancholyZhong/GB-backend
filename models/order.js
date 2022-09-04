const mongoose = require("mongoose")

const Schema = mongoose.Schema

const orderSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  purchaseDate: { type: String, required: true },
  description: { type: String, required: true },
})

module.exports = mongoose.model("Order", orderSchema)
