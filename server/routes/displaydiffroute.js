const express = require('express');
const dbcon = require('../dbconf/dbconfig');
const router = express.Router();

router.post('/', (req, res) => {
    var difoutput = ' ';
    const { sub } = req.body;
    var select_difficulty_query = 'SELECT DISTINCT difficulty from quiz_data WHERE sub="' + sub + '"';
    dbcon.query(select_difficulty_query, (err, result) => {
        for (var i = 0; i < result.length; i++) {
            difoutput += ' <br> <a class="btn btn-outline-info abc" id="diffbtn" data-dif="' + result[i].difficulty + '" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"  style="width:300px;position: relative; left: 89px;">"' + result[i].difficulty + '"</a>  <br> <div class="collapse difcol"  id="collapseExample"> </div>';
        }
        res.send({
            "output": difoutput
        })
    })
})
module.exports = router;