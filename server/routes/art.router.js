const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET all art
 * 
 * returns all artwork to be displayed on landing page
 */
router.get('/', (req, res) => {
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
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;