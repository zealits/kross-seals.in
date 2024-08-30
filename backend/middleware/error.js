class ErrorHandler extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  
  const errorMiddleware = (err, req, res, next) => {
    // Default error message and status code
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;
  
    // Handle specific error types
    if (err.name === "CastError") {
      const message = `Resource not found. Invalid ${err.path}`;
      err = new ErrorHandler(message, 400);
    }
    if (err.code === 11000) {
      const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
      err = new ErrorHandler(message, 400);
    }
    if (err.name === "JsonWebTokenError") {
      const message = `Json Web Token is invalid, Try again!`;
      err = new ErrorHandler(message, 400);
    }
    if (err.name === "TokenExpiredError") {
      const message = `Json Web Token is expired, Try again!`;
      err = new ErrorHandler(message, 400);
    }
  
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  };
  
  module.exports = {
    ErrorHandler,
    errorMiddleware
  };
  