const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const sessionMiddleware = require("./modules/session-middleware");
const passport = require("./strategies/user.strategy");

// Route includes
const userRouter = require("./routes/user.router");
const facilityRouter = require("./routes/facility.router");
const poolRouter = require("./routes/pool.router");
const resultRouter = require("./routes/result.router");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/api/facility", facilityRouter);
app.use("/api/pool", poolRouter);
app.use("/api/result", resultRouter);
app.use("/api/facilities",facilityRouter)

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5003;

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
