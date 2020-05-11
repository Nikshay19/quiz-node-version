const express = require('express');
const router = express.Router();
const dbcon = require('../dbconf/dbconfig');
const token_middleware = require('../middlewares/jwtauth');
router.get('/', token_middleware, (req, res) => {
    if (req.status === "exists") {
        var HTMLoutput = ' ';
        const get_all_data = "select distinct sub from quiz_data";
        dbcon.query(get_all_data, async(err, result) => {
            for (let index = 0; index < result.length; index++) {
                const output = await getSubData(result[index].sub)
                HTMLoutput += output;
            }
            res.json({
                output: HTMLoutput
            })
        })
    } else {
        res.json({
            message: "unauthorized"
        })
    }
});

function getSubData(res) {
    var renderData = '<div class="card" style="width: 18rem;">' +
        '<div class="card-body">' +
        '<h5 class="card-title">' + res + '</h5>';
    return new Promise((resolve, reject) => {
        dbcon.query("select distinct chapter from quiz_data where sub='" + res + "' and difficulty = 'easy' ", (err, result) => {
            for (let index = 0; index < result.length; index++) {
                renderData += '<h6 class="card-subtitle mb-2 text-muted">' + result[index].chapter + '</h6>';

            }
            renderData += '</div>' +
                '</div>' +
                '<span style="display:inline-block; width: 50px;"></span>';
            resolve(renderData);
        })
    })

}
module.exports = router;