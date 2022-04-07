const asyncHandler = require("express-async-handler");

// desc      get goals
// route     GET /api/goals
// access    private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get goals` });
});

// desc      get goals
// route     POST /api/goals
const setGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `set goals` });
});

// desc      get goals
// route     PUT /api/goals/:id
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goals` });
});

// desc      get goals
// route     delete /api/goals/:id
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goals` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
