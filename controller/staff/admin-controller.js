const asyncErrorHandler = require("express-async-handler");
const AdminModel = require("../../model/staff/admin");

//@des Register Admin
//@route POST /api/v1/admins/register
//@access Private
exports.registerAdminController = asyncErrorHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if email is already exists
  const isEmailFound = await AdminModel.findOne({ email });
  if (isEmailFound) {
    throw new Error("Admin already exists");
  }

  // register admin
  const newAdmin = await AdminModel.create({
    name,
    email,
    password,
  });

  res.status(201).json({
    status: "success",
    data: newAdmin,
  });
});

//@des Register Login
//@route POST /api/v1/admins/login
//@access Private
exports.loginAdminController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await AdminModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    if (user && (await user.verifyPassword(password))) {
      res.status(200).json({
        success: true,
        message: "Login successful",
        data: user,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

//@des Get All Admins
//@route GET /api/v1/admins
//@access Private
exports.getAdminsContoller = (req, res) => {
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
};

//@des Get Single Admin
//@route GET /api/v1/admins/:id
//@access Private
exports.getAdminController = (req, res) => {
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
};

//@des Update Admin
//@route UPDATE /api/v1/admins/:id
//@access Private
exports.updateAdminController = (req, res) => {
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
};

//@des Delete Admin
//@route DELETE /api/v1/admins/:id
//@access Private
exports.deleteAdminController = (req, res) => {
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
};

//@des Admin Suspends a Teacher
//@route PUT /api/v1/admins/suspend/teacher/:id
//@access Private
exports.adminSuspendTeacherController = (req, res) => {
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
};

//@des Admin Un-Suspends a Teacher
//@route PUT /api/v1/admins/unsuspend/teacher/:id
//@access Private
exports.adminUnSuspendTeacherController = (req, res) => {
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
};

//@des Admin Withdraw a Teacher
//@route PUT /api/v1/admins/withdraw/teacher/:id
//@access Private
exports.adminWithdrawTeacherController = (req, res) => {
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
};

//@des Admin Un-Withdraw a Teacher
//@route PUT /api/v1/admins/unwithdraw/teacher/:id
//@access Private
exports.adminUnWithdrawTeacherController = (req, res) => {
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
};

//@des Admin Publish Exam Results
//@route PUT /api/v1/admins/publish/exma/:id
//@access Private
exports.adminPublishResults = (req, res) => {
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
};

//@des Admin Un-Publish Exam Results
//@route PUT /api/v1/admins/unpublish/exma/:id
//@access Private
exports.adminUnPublishResults = (req, res) => {
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
};
