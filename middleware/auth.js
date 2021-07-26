const jwt = require('jsonwebtoken')

const tokenKey = 'E6FMgySr0oRslkd4up0urTpflCG0n11z'

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"]

    if (!token) {
        return res.status(403).send('token required for authentication')
    }

    try {
        const decoded = jwt.verify(token, tokenKey)
        req.player = decoded
    } catch (err) {
        return res.status(401).send('Invalid Token')
    }
    return next()
}

module.exports = verifyToken