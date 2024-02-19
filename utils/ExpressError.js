class ExpressError extends Error {
    constructor(statusCode, message){
        super();
        this.statusCoe = statusCode;
        this.message = message; 
    }
}

module.exports = ExpressError;