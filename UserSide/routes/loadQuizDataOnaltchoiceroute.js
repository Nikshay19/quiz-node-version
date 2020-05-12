const express = require('express');
const router = express.Router();
const dbcon = require('../dbconf/dbconfig');
const token_middleware = require('../middlewares/jwtauth');
router.post('/', token_middleware, (req, res) => {
    if (req.status === "exists") {
        var HTMLoutput = ' ';
        const { useraltchoice, userprefdif } = req.body;
        const get_all_data = "select distinct sub from quiz_data";
        dbcon.query(get_all_data, async(err, result) => {
            for (let index = 0; index < result.length; index++) {
                const output = await getSubData(result[index].sub, userprefdif)
                if (!output.difficulty) {

                    HTMLoutput += output;
                } else {
                    const altOutput = await getAltSubData(output.subject, useraltchoice)
                    var type = typeof altOutput;
                    if (type !== 'object') {
                        HTMLoutput += altOutput
                    } else {
                        HTMLoutput += altOutput
                    }
                }
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

function getSubData(res, dif) {
    var renderData = '<div class="card" style="width: 18rem;">' +
        '<div class="card-body">' +
        '<h5 class="card-title">' + res + '</h5>';
    return new Promise((resolve, reject) => {
        dbcon.query("select distinct chapter from quiz_data where sub='" + res + "' and difficulty = '" + dif + "' ", (err, result) => {
            if (result.length > 0) {
                for (let index = 0; index < result.length; index++) {
                    renderData += '<a class="chapcoll" data-toggle="collapse" href="#chaptercollapse" role="button" aria-expanded="false" aria-controls="collapseExample">' +
                        '' + result[index].chapter + '' +
                        '</a>' +
                        '<div class="collapse chcol" id="chaptercollapse">' +
                        '<div class="card card-body">' +
                        '</div>' +
                        '</div>';
                }
                renderData += '</div>' +
                    '</div>' +
                    '<span style="display:inline-block; width: 50px;"></span>';
                resolve(renderData);
            } else {
                resolve({
                    difficulty: dif,
                    subject: res
                });
            }
        })
    })

}

function getAltSubData(sub, dif) {
    var renderData = '<div class="card" style="width: 18rem;">' +
        '<div class="card-body">' +
        '<h5 class="card-title">' + sub + '</h5>';
    return new Promise((resolve, reject) => {
        dbcon.query("select distinct chapter from quiz_data where sub='" + sub + "' and difficulty = '" + dif + "' ", (err, result) => {
            if (result.length > 0) {
                for (let index = 0; index < result.length; index++) {
                    renderData += '<a class="chapcoll" data-toggle="collapse" href="#chaptercollapse" role="button" aria-expanded="false" aria-controls="collapseExample">' +
                        '' + result[index].chapter + '' +
                        '</a>' +
                        '<div class="collapse chcol" id="chaptercollapse">' +
                        '<div class="card card-body">' +
                        '</div>' +
                        '</div>';
                }
                renderData += '</div>' +
                    '</div>' +
                    '<span style="display:inline-block; width: 50px;"></span>';
                resolve(renderData);
            } else {
                resolve({
                    status: 'notfound',
                    difficulty: dif
                });
            }
        })
    })

}

module.exports = router;