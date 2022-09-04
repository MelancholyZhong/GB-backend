const bodyParser = require("body-parser")
const express = require("express")
const mongoose = require("mongoose")

const exploreRoutes = require("./routes/explore-routes")
const redeemRoutes = require("./routes/redeem-routes")
const profileRoutes = require("./routes/profile-routes")

const app = express()
const PORT = 1234

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  )
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE")
  next()
})

app.use("/explore", exploreRoutes)

app.use("/redeem", redeemRoutes)

app.use("/profile", profileRoutes)

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2b2dd.mongodb.net/GreenBank?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(PORT, () =>
      console.log(`It's alive on http://localhost:${PORT}`)
    )
  })
  .catch((err) => {
    console.log(err)
  })
