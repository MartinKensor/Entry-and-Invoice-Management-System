const express = require("express");
const router = express.Router();
var visitor = require("../controllers/visitor");

router.post("/checkin", visitor.checkin);
router.post("/checkout", visitor.checkout);
router.get("/logbook", visitor.entrydetails);

module.exports = router;
