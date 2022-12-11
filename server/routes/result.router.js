const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
    // GET route code here
    const queryText = 'SELECT * FROM "chemical_input";';
    pool.query(queryText)
        .then((result) => {
            console.log("SELECT RESULT success!", result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log("Error in GET RESULT", error);
            res.sendStatus(500);
        });
});

/**
 * GET by id route template
 * This GET will obtain a specific result
 */
router.get("/detail/:id", (req, res) => {
    // GET route code here
    console.log('Specific result', req.params);
    const queryText = 'SELECT * FROM "chemical_input" WHERE "id" = $1';
    pool.query(queryText, [req.params.id])
    .then((result) => {
        if (result.rows && result.rows.length > 0) {
            res.status(201).send(result.rows[0]);
        } else {
            res.sendStatus(500);
        }
    }).catch((error) => {
        console.log('Error in GET specific results', error);
        res.sendStatus(500);
    });
});

/**
 * GET by id route template
 * This GET will obtain all results when a user selects the test history for a body of water
 */
router.get("/pool/:id", (req, res) => {
    // GET route code here
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
    console.log(req.body);

    const insertResultQuery = `
    INSERT INTO "chemical_input" ("ph", "free_cl", "combined_cl", "total_cl", "acid", "base", 
    "alkalinity", "hardness", "cyanuric_acid", "copper", "iron", "phosphates", 
    "tds", "temperature", "borate", "salinity", "notes")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
    RETURNING "id"`;

    // FIRST QUERY MAKES PARK
    pool.query(insertResultQuery, [
        req.body.ph,
        req.body.free_cl,
        req.body.combined_cl,
        req.body.total_cl,
        req.body.acid,
        req.body.base,
        req.body.alkalinity,
        req.body.hardness,
        req.body.cyanuric_acid,
        req.body.copper,
        req.body.iron,
        req.body.phosphates,
        req.body.tds,
        req.body.temperature,
        req.body.borate,
        req.body.salinity,
        req.body.notes,
    ])
        .then((result) => {
            if (result.rows && result.rows.length > 0) {
                // console.log('new test id:', result.rows[0].id);
                res.status(201).send({ id: result.rows[0].id });
            } else {
                res.sendStatus(500);
            }
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    //const createdResultId = result.rows[0].id
});

/**
 * DELETE route template
 */
router.delete("/:id", (req, res) => {
    // DELETE route code here
});

module.exports = router;
