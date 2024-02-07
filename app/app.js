const express = require("express");
const morgan = require("morgan");
const adminRouter = require("../routes/staff/admin-router");

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json()); // pass incoming JSON to express

//Routes

// Admin
app.use("/api/v1/admins", adminRouter);

module.exports = app;
