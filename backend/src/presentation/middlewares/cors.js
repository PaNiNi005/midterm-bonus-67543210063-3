function corsMiddleware(req, res, next) {
    // Allow all origins (หรือจะระบุเฉพาะ origin ก็ได้)
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Allow HTTP methods
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    );

    // Allow headers
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type'
    );

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    next();
}

module.exports = corsMiddleware;
