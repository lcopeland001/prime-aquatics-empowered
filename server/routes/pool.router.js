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
 * POST route template
 */
router.post("/", (req, res) => {
    // POST route code here
});

/**
 * DELETE route template
 */
router.delete("/:id", (req, res) => {
    // DELETE route code here
});

/**
 * PUT route template
 */
router.put("/:id", (req, res) => {
    // PUT route code here
});

module.exports = router;
