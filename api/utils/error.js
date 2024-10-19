export const errorHandler = (statusCode, message) => {
    const error = new Error(message); // Pass the message directly to the Error constructor
    error.statusCode = statusCode;    // Add the status code
    return error;                     // Return the custom error object
};
