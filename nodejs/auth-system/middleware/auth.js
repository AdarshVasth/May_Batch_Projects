const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key';

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        res.status(401).json({message: 'Access denied. No token provided.'});
    } else {
        jwt.verify(token, SECRET_KEY, (err, user) => {
            if (err) {
                res.status(401).json({message: 'Invalid token.'});
            } else {
                req.user = user;
                next();
            }
        });
    }
}

module.exports = auth;
