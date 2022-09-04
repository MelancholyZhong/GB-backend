const express = require("express")

const profileControllers = require("../controllers/profile-controllers")
const router = express.Router()

router.get("/deposit", profileControllers.viewDeposits)

router.get("/order", profileControllers.viewOrders)

router.get("/balance", profileControllers.viewBalance)

router.post("/deposit", profileControllers.makeDeposit)

router.post("/order", profileControllers.createOrder)

router.post("/account", profileControllers.createAccount)

module.exports = router
