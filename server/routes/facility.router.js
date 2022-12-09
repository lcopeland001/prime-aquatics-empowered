const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/all", (req, res) => {
    if (req.isAuthenticated()) {
        let sql = `SELECT * FROM "facility_details";`;
        pool.query(sql)
            .then((result) => {
                // console.log("Result of all facilities fetch", result);
                res.send(result.rows);
            })
            .catch((e) => {
                console.log("Error getting all facilities", e);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

router.get("/user/:id", (req, res) => {
    if (req.isAuthenticated()) {
        let sql = `SELECT "user"."first_name", "facility_details"."facility_name", "facility_details"."id"
            FROM "facility_details"
            JOIN "user_facility" ON "facility_details"."id" = "user_facility"."facility_id"
            JOIN "user" ON "user"."id" = "user_facility"."user_id"
            WHERE "user"."id" = $1`;
        pool.query(sql, [req.params.id])
            .then((result) => {
                // console.log("Result of user_facility request is", result);
                res.send(result.rows);
            })
            .catch((e) => {
                console.log(
                    "Error getting all specific facilities for a user",
                    e
                );
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

/**
 * GET route template
 */
router.get("/", (req, res) => {
    // GET route code here
    console.log("re.user: ", req.user);
    console.log("is authenticated: ", req.isAuthenticated());
    if (req.isAuthenticated()) {
        let queryText =
            //  `
            // SELECT "facility_details"."facility_name" FROM "facility_details" JOIN "user_facility" ON "facility_details"."id" = "user_facility"."facility_id"
            // WHERE "user_facility"."user_id"=$1;`;
            `SELECT * FROM "facility_details" JOIN "user_facility" ON "facility_details"."id" = "user_facility"."facility_id" WHERE "user_facility"."user_id"=$1;`;

        pool.query(queryText, [req.user.id])
            .then((result) => {
                console.log("USER: ", req.user.id);
                console.log("Result is:", result.rows);
                console.log(result);
                res.send(result.rows);
            })
            .catch((e) => {
                console.log("Error getting all the facilities", e);
                res.sendStatus(500);
            });
    } else {
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

router.put("/user/:id", (req, res) => {
    if (req.isAuthenticated()) {
        console.log("what is in req.body", req.body);
        console.log("what is the param id", req.params.id);
        let sql = ``;
        // `UPDATE "user"
        // SET "user_access" = $1
        // WHERE "id" = $2;`;
        pool.query(sql, [req.params.id])
            .then((result) => {
                console.log("Result of updating user_facility is", result);
                res.send(result.rows);
            })
            .catch((e) => {
                console.log("Error updating user facility access", e);
            });
        res.sendStatus(500);
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;
