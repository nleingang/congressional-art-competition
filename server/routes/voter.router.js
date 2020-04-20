const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

const { check, validationResult } = require('express-validator');

// this will check the database to see if the email is already in use
router.get("/", (req, res) => {
    pool.query(`
    SELECT email FROM voters WHERE email=$1
    `, [req.body.email])
        .then((result) => {
            console.log("this is the number of rows:", result.rows.length)
            if (result.rows.length != 0) {
                res.send(true);
                res.sendStatus(201);
            } else {
                res.send(false);
                res.sendStatus(500);
            }
        })
        .catch((error) => {
            console.log(error)
        })
});

/**
 * POST route for new voter 
 */
// router.post("/add", async (req, res, next) => {
//     await check('email')
//         .isEmail()
//         .normalizeEmail()
    

//     await 
//              // end custom validation

//     errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(422).json({
//             errors: errors.array()
//         });
//     }

//     console.log("voter route hit with req:", req.body);
//     pool.query(
//             `
//   INSERT INTO "voters" ("email", "zip")
//   VALUES ($1,$2);
//   `,
//             [req.body.email, req.body.zip]
//         )
//         .then((result) => {
//             console.log(result);
//             res.sendStatus(201);
//         })
//         .catch((error) => {
//             console.log("error with adding voter:", error);
//             res.sendStatus(500);
//         });
// });

module.exports = router;