const express = require("express");
const router = express.Router();

router.get("/:roomId", (req, res, next) => {
  res
    .status(200)
    .json({ message: "Reservations were fetched", roomId: req.params.roomId });
});

router.post("/", (req, res, next) => {
  res.status(201).json({ message: "Reservations were created" });
});

router.delete("/:roomId", (req, res, next) => {
  res
    .status(200)
    .json({ message: "Reservation deleted", roomId: req.params.roomId });
});

module.exports = router;
