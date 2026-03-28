const ERROR = 'error';
const FAIL = 'fail';



class AppError extends Error {
  setStatus = (code) => `${code}`.startsWith('4') ? FAIL: ERROR;
  capture = () => Error.captureStackTrace(this, this.constructor);
  constructor(message, code) {

    super(message);
    this.status = this.setStatus(statusCode);
    this.statusCode = code;
    this.isOperational = true;
    this.capture();
  }
}

export default AppError;
