const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
    // GET route code here
});

/**
 * GET by id route template
 */
router.get("/detail/:id", (req, res) => {
    const query = `SELECT * FROM pool_details WHERE "id"=$1`;
    pool.query(query, [req.params.id])
        .then((result) => {
            res.send(result.rows[0]);
        })
        .catch((err) => {
            console.log("ERROR: Get all Pools", err);
            res.sendStatus(500);
        });
});

/**
 * GET by id route template
 */
router.get("/:id", (req, res) => {
    const query = `SELECT * FROM pool_details WHERE "id"=$1`;
    pool.query(query, [req.params.id])
        .then((result) => {
            // Return the first item in the array (which is an Object)
            res.send(result.rows[0]);
        })
        .catch((err) => {
            console.log("ERROR: Get all Pools", err);
            res.sendStatus(500);
        });
});

/**
 * GET by id route template
 */
 router.get("/", (req, res) => {
    const query = `SELECT * FROM pool_details;`;
    pool.query(query)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log("ERROR: Get all Pools", err);
            res.sendStatus(500);
        });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
    // POST route code here
});

/**
 * DELETE route template
 */
 router.delete("/:id", (req, res) => {
    if (req.isAuthenticated()) {
        let sql = `DELETE FROM "pool_details"
        WHERE "id" = $1`;

        pool.query(sql, [req.params.id])
            .then((result) => {
                res.sendStatus(200);
            })
            .catch((e) => {
                console.log("Error deleting specific pool", e);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

/**
 * PUT route template
 */
 router.put("/:id", (req, res) => {
    console.log("req.body is", req.body);
    console.log("req.params is", req.params);
    if (req.isAuthenticated()) {
        let sql = `UPDATE "pool_details"
        SET "name" = $1,
        "volume" = $2,`;

        pool.query(sql, [
            req.body.name,
            req.body.volume,
        ])
            .then((result) => {
                res.sendStatus(201);
            })
            .catch((e) => {
                console.log("Something went wrong updating pools");
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;
