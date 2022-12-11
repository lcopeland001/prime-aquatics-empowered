const express = require("express");
const {
    rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get("/", rejectUnauthenticated, (req, res) => {
    // Send back user object from the session (previously queried from the database)
    res.send(req.user);
});

// Obtain all users
router.get("/all", (req, res) => {
    if (req.isAuthenticated()) {
        const sql = `SELECT id, first_name, last_name, phone_number, user_access FROM "user" ORDER BY id ASC `;
        pool.query(sql)
            .then((result) => {
                res.send(result.rows);
            })
            .catch((e) => {
                console.log("Error getting all users", e);
                res.sendStatus(500);
            });
    }
});

// Obtain a user's details
router.get("/detail/:id", (req, res) => {
    if (req.isAuthenticated()) {
        const sql = `SELECT id, first_name, last_name, phone_number, user_access FROM "user" WHERE id = $1`;
        pool.query(sql, [req.params.id])
            .then((result) => {
                res.send(result.rows[0]);
            })
            .catch((e) => {
                console.log("Error getting user detail", e);
                res.sendStatus(500);
            });
    }
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post("/register", (req, res, next) => {
    const username = req.body.username;
    const password = encryptLib.encryptPassword(req.body.password);

    const queryText = `INSERT INTO "user" (username, password, first_name, last_name, phone_number)
    VALUES ($1, $2, $3, $4, $5) RETURNING id`;
    pool.query(queryText, [
        username,
        password,
        req.body.first_name,
        req.body.last_name,
        req.body.phone,
    ])
        .then(() => res.sendStatus(201))
        .catch((err) => {
            console.log("User registration failed: ", err);
            res.sendStatus(500);
        });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post("/login", userStrategy.authenticate("local"), (req, res) => {
    res.sendStatus(200);
});

// clear all server session information about this user
router.post("/logout", (req, res) => {
    // Use passport's built-in method to log out the user
    req.logout();
    res.sendStatus(200);
});

// User PUT route
router.put("/profile/:id", (req, res) => {
    if (req.isAuthenticated()) {
        const sql = `
    UPDATE "user"
    SET "first_name" = $1,
    "last_name" = $2,
    "phone_number" = $3
    WHERE "id" = $4;
    `;
        pool.query(sql, [
            req.body.first_name,
            req.body.last_name,
            req.body.phone,
            req.params.id,
        ])
            .then((result) => {
                res.sendStatus(201);
            })
            .catch((e) => {
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403); // Forbidden if unauthenticated
    }
});

// User PUT route
router.put("/access/:id", (req, res) => {
    if (req.isAuthenticated()) {
        const sql = `
  UPDATE "user"
  SET "user_access" = $1
  WHERE "id" = $2;
  `;
        console.log(req.body.id);

        pool.query(sql, [req.body.user_access, req.body.id])
            .then((result) => {
                res.sendStatus(201);
            })
            .catch((e) => {
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403); // Forbidden if unauthenticated
    }
});

// User DELETE Route
router.delete("/:id", (req, res) => {
    if (req.isAuthenticated()) {
        const sql = `DELETE FROM "user"
        WHERE "id" = $1;`;

        pool.query(sql, [req.params.id])
            .then((result) => {
                res.sendStatus(201);
            })
            .catch((e) => {
                res.sendStatus(500);
            });
    }
});

module.exports = router;
