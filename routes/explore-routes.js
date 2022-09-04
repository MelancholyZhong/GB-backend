const express = require("express")

const exploreControllers = require("../controllers/explore-controllers")

const router = express.Router()

router.get("/", exploreControllers.getExploreItems)

module.exports = router
