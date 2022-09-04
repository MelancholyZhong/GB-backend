const mongoose = require("mongoose")

const Schema = mongoose.Schema

const accountSchema = new Schema({
  accountNumber: { type: Number, required: true },
  userName: { type: String, required: true },
  balance: { type: Number, required: true },
})

module.exports = mongoose.model("Account", accountSchema)
