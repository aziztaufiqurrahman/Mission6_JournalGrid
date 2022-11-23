const express = require('express')
const datac = require('../controllers/dataController')
const router = express.Router()

router.get("/data", datac.viewAll)
router.post("/postData", datac.viewAll)
router.delete("/deletData", datac.viewAll)
router.put("/updateData", datac.viewAll)

module.exports = router