const express = require('express');
const router = express.Router();
const dbcon = require('../dbconf/dbconfig');
const token_middleware = require('../middlewares/jwtauth');

router.get('/', token_middleware, (req, res) => {
    if (req.status === "exists") {
        const { user } = req.getuseremail;
        const select_query = 'select * from savedresults where user = "' + user + '"';
        dbcon.query(select_query, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log(result[0].userwronganswers.split(','))
            }
        })
    }
})

module.exports = router;