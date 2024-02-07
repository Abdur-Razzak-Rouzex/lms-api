const express = require("express");
const {
  registerAdminController,
  loginAdminController,
  getAdminsContoller,
  getAdminController,
  updateAdminController,
  deleteAdminController,
  adminSuspendTeacherController,
  adminUnSuspendTeacherController,
  adminWithdrawTeacherController,
  adminUnWithdrawTeacherController,
  adminPublishResults,
  adminUnPublishResults,
} = require("../../controller/staff/admin-controller");

const adminRouter = express.Router();

// Admin register
adminRouter.post("/register", registerAdminController);

// Admin login
adminRouter.post("/login", loginAdminController);

// Get all admins
adminRouter.get("/", getAdminsContoller);

// Get single admin
adminRouter.get("/:id", getAdminController);

// Update admin
adminRouter.put("/:id", updateAdminController);

// Delete admin
adminRouter.delete("/:id", deleteAdminController);

// Admin suspending teacher
adminRouter.put("/suspend/teacher/:id", adminSuspendTeacherController);

// Admin un-suspending teacher
adminRouter.put("/unsuspend/teacher/:id", adminUnSuspendTeacherController);

// Admin withdraw teacher
adminRouter.put("/withdraw/teacher/:id", adminWithdrawTeacherController);

// Admin unwithdraw teacher
adminRouter.put("/unwithdraw/teacher/:id", adminUnWithdrawTeacherController);

// Admin publish exam result
adminRouter.put("/publish/result/:id", adminPublishResults);

// Admin unpublish exam result
adminRouter.put("/unpublish/result/:id", adminUnPublishResults);

module.exports = adminRouter;
