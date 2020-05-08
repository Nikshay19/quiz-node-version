require('dotenv').config()
const dbcon = require('../dbconf/dbconfig');
const jwt = require('jsonwebtoken');
const url = require('url');
const localstorage = require('local-storage');
const verifytoken = function verifyToken(req, res, next) {
    const token = localstorage.get("access-token");
    jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
        if (err) {
            req.status = "not exists"
            next();
        } else if (decoded.user) {
            req.status = "exists";
            next();
        } else {
            req.status = "not exists";
            next();
        }
    });
}
module.exports = verifytoken;