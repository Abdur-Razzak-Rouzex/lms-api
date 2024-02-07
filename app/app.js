const express = require("express");
const adminRouter = require("../routes/staff/admin-router");
const globalErrorHandler = require("../middlewares/globalErrorHandler");

const app = express();

// Middleware
app.use(express.json()); // pass incoming JSON to express

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

//Routes
app.use("/api/v1/admins", adminRouter);

// Error middleware
app.use(globalErrorHandler);

module.exports = app;
