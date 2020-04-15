const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET all art
 *
 * returns all artwork to be displayed on landing page
 */
router.get("/", (req, res) => {
  queryText = 'SELECT * FROM "artwork"';
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error completing GET admin auctions query:", err);
      res.sendStatus(500);
    });
});

/**
 * POST route for vote submission
 */
router.post("/vote-submit", (req, res) => {
  console.log("vote submit route hit with req:", req.body);
  pool
    .query(
      `
  INSERT INTO "votes" ("first_place", "second_place", "third_place")
  VALUES ($1,$2,$3);
  `,
      [req.body.firstChoiceId, req.body.secondChoiceId, req.body.thirdChoiceId]
    )
    .then((result) => {
      console.log(result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("error with updating votes:", error);
      res.sendStatus(500);
    });
});

module.exports = router;
