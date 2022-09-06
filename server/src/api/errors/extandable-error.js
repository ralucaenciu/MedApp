/**
 * @extends Error
 */
class ExtendableError extends Error {
  constructor({ message, errors, status, isPublic }) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errors = errors;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true;
    // Error.captureStackTrace(this, this.constructor.name);
  }
}

module.exports = ExtendableError;
