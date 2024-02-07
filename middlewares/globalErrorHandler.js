const globalErrorHandler = (err, req, res, next) => {
  const stack = err.stack;
  const message = err.message;
  const status = err.status ? err.status : "Failed";
  const statusCode = err.statusCode ? err.statusCode : 500;

  res.status(statusCode).json({
    status,
    message,
    stack,
  });
};

// Not Found
const notFoundError = () => {
  const err = new Error(`Can't find ${req.originalUrl} on the server`);
  next(err);
};

module.exports = { globalErrorHandler, notFoundError };
