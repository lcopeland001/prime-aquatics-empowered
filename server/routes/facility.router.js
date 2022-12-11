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
        let sql = `SELECT "facility_details"."facility_name", "facility_details"."id"
            FROM "facility_details"
            JOIN "user_facility" ON "facility_details"."id" = "user_facility"."facility_id"
            JOIN "user" ON "user"."id" = "user_facility"."user_id"
            WHERE "user"."id" = $1`;
        pool.query(sql, [req.params.id])
            .then((result) => {
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
 * GET specific facility to set as default
 */
router.put("/default/", (req, res) => {
    if (req.isAuthenticated()) {
        let queryText = `SELECT * FROM "facility_details"
        JOIN "user_facility" ON "facility_details"."id" = "user_facility"."facility_id"
        WHERE "user_facility"."user_id" = $1 and "user_facility"."facility_id" = $2;`;
        pool.query(queryText, [req.body.id, req.body.facilityId])
            .then((result) => {
                console.log(result.rows[0]);
                res.send(result.rows[0]);
            })
            .catch((e) => {
                console.log("Error obtaining a specific facility", e);
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
    // console.log("re.user: ", req.user);
    // console.log("is authenticated: ", req.isAuthenticated());
    if (req.isAuthenticated()) {
        let queryText =
            //  `
            // SELECT "facility_details"."facility_name" FROM "facility_details" JOIN "user_facility" ON "facility_details"."id" = "user_facility"."facility_id"
            // WHERE "user_facility"."user_id"=$1;`;
            `SELECT * FROM "facility_details" JOIN "user_facility" ON "facility_details"."id" = "user_facility"."facility_id" WHERE "user_facility"."user_id"=$1;`;

        pool.query(queryText, [req.user.id])
            .then((result) => {
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
 * POST route template
 */
router.post("/", (req, res) => {
    if (req.isAuthenticated()) {
        let sql = `INSERT INTO "facility_details" ("facility_name", "street", "city", "state", "zip", "notes")
        VALUES ($1, $2, $3, $4, $5, $6);`;

        pool.query(sql, [
            req.body.facility_name,
            req.body.street,
            req.body.city,
            req.body.state,
            req.body.zip,
            req.body.notes,
        ])
            .then((result) => {
                res.sendStatus(200);
            })
            .catch((e) => {
                console.log("Error creating a new facility");
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

/**
 * DELETE route template
 */
router.delete("/:id", (req, res) => {
    if (req.isAuthenticated()) {
        let sql = `DELETE FROM "facility_details"
        WHERE "id" = $1`;

        pool.query(sql, [req.params.id])
            .then((result) => {
                res.sendStatus(200);
            })
            .catch((e) => {
                console.log("Error deleting specific facility", e);
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
    // PUT route code here
});

router.put("/user/:id", (req, res) => {
    if (req.isAuthenticated()) {
        // console.log("what is in req.body", req.body);
        // console.log("what is the param id", req.params.id);
        let sql = "";
        if (req.body.facilityAccess === "remove") {
            sql = `DELETE FROM "user_facility"
            WHERE user_id = $1 AND facility_id = $2;`;
        } else if (req.body.facilityAccess === "add") {
            sql = `INSERT INTO "user_facility"
            VALUES ($1, $2)
            ON CONFLICT DO NOTHING;`;
        }

        pool.query(sql, [req.params.id, req.body.facility_id])
            .then((result) => {
                console.log("Result of updating user_facility is", result);
                res.send(result.rows[0]);
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
