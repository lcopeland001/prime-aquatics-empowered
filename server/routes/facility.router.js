const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
    // GET route code here
    console.log('re.user: ', req.user);
    console.log('is authenticated: ', req.isAuthenticated());
    if(req.isAuthenticated()){
        let queryText = 'SELECT * FROM "facility_details"';
        pool.query(queryText, [req.user.id]).then((result) => {
            res.send(result.rows);
        }).catch((e) => {
            console.log('Error getting all the facilities',e);
            res.sendStatus(500);
        })
    }else{
        res.sendStatus(403);
    }
});

/**
 * GET by id route template
 */
router.get("/:id", (req, res) => {
    // GET route code here
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
