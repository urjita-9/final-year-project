function enableCors(req, res, next) {
    // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Allow the following methods
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    // Allow the following headers
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
}

module.exports = enableCors;
