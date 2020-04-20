const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

const { check, validationResult } = require('express-validator');

/**
 * GET all art
 *
 * returns all artwork to be displayed on landing page
//  */
// router.get("/", (req, res) => {

//     queryText = 'SELECT * FROM "artwork"';
//     pool
//         .query(queryText)
//         .then((result) => {
//             res.send(result.rows);
//         })
//         .catch((err) => {
//             console.log("Error completing GET admin auctions query:", err);
//             res.sendStatus(500);
//         });
// });

/**
 * POST route for new voter 
 */
router.post("/add", (req, res) => {



    console.log("voter route hit with req:", req.body);
    pool
        .query(
            `
  INSERT INTO "voters" ("email", "zip")
  VALUES ($1,$2);
  `,
            [req.body.email, req.body.zip]
        )
        .then((result) => {
            console.log(result);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log("error with adding voter:", error);
            res.sendStatus(500);
        });
});

module.exports = router;