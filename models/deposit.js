const mongoose = require("mongoose")

const Schema = mongoose.Schema

const depositSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  points: { type: Number, required: true },
  actionDate: { type: String, required: true },
  description: { type: String, required: true },
})

module.exports = mongoose.model("Deposit", depositSchema)
