const express = require("express");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(morgan("dev"));

//Routes

// Admin register
app.post("/api/v1/admins/register", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin has been registered",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
});

// Admin login
app.post("/api/v1/admins/login", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Admin has been logged in",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
});

// Get all admins
app.get("/api/v1/admins", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "All admins",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
});

// Get single admin
app.get("/api/v1/admins/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Single Admin",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
});

// Update admin
app.put("/api/v1/admins/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Update Admin",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
});

// Delete admin
app.delete("/api/v1/admins/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Admin Deleted",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
});

// Admin suspending teacher
app.put("/api/v1/admins/suspend/teacher/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Admin Suspended teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
});

// Admin un-suspending teacher
app.put("/api/v1/admins/unsuspend/teacher/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Admin Unsuspended teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
});

// Admin withdraw teacher
app.put("/api/v1/admins/withdraw/teacher/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Admin withdraw teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
});

// Admin unwithdraw teacher
app.put("/api/v1/admins/unwithdraw/teacher/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Admin Unwithdraw teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
});

// Admin publish exam result
app.put("/api/v1/admins/publish/result/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Admin publish result",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
});

// Admin unpublish exam result
app.put("/api/v1/admins/unpublish/result/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Admin Unpublish Result",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
});

module.exports = app;
