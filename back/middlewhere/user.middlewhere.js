

export const timeLog = (req, _res, next) => {
    console.log('time: ', Date.now(), "Request Type: ", req.method, "Request URL: ", req.originalUrl);
    next(); 
};



export const helloLog = (req, res, next) => {
    console.log("Hello from server");
    next();
}


