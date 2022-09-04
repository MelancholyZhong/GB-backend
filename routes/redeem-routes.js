const express = require("express")

const redeemControllers = require("../controllers/redeem-controllers")
const router = express.Router()

router.get("/", redeemControllers.getRedeemItems)

module.exports = router
