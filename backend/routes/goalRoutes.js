const express = require("express");
const router = express.Router();

const {
  setGoals,
  getGoals,
  updateGoals,
  deleteGoals,
} = require("../controller/goalController");

router.get("/", getGoals);

router.post("/", setGoals);

router.put("/:id", updateGoals);

router.delete("/:id", deleteGoals);

module.exports = router;
