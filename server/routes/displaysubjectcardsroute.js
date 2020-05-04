const express = require('express');
const dbcon = require('../dbconf/dbconfig');
const router = express.Router();
router.get('/', (req, res) => {
    var outputData = ' ';
    var select_distinct_subject_query = `SELECT DISTINCT sub from quiz_data`;
    dbcon.query(select_distinct_subject_query, (err, result) => {
        for (var i = 0; i < result.length; i++) {
            outputData += '<button type="button" id="sub" class="btn btn-outline-success" data-id="' + result[i].sub + '" data-toggle="modal" data-target="#subcard" style="margin-left:20px; margin-bottom:20px;">' + result[i].sub + '</button>'
        }
        res.send({
            "output": outputData
        })
    })
})

module.exports = router;