const express = require("express");
const pool = require("../modules/pool");
const {
    rejectUnauthenticated
} = require('../modules/authentication-middleware');

const router = express.Router();


/**
 * GET route for collecting votes
 */
router.get("/", rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT * FROM votes;`)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(error);
        })
});

module.exports = router;