const globalErrorHandler = (err, _req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Something went wrong';
    const isOperational = err.isOperational || false;

   
    if (process.env.NODE_ENV === 'development') {
        res.status(statusCode).json({
            status: statusCode < 500 ? 'fail' : 'error',
            message,
            stack: err.stack,
        });
    } else {
        res.status(statusCode).json({
            status: statusCode < 500 ? 'fail' : 'error',
            message: isOperational ? message : 'Internal Server Error',
        });

        if (!isOperational) {
            console.error('Unexpected Error:', {
                message: err.message,
                stack: err.stack,
                error: err,
            });
        }
    }
};

module.exports = { globalErrorHandler };
