const express = require('express');
const router = express.Router();
const dbcon = require('../dbconf/dbconfig');
const token_middleware = require('../middlewares/jwtauth');

router.post('/', token_middleware, (req, res) => {
    const { user } = req.getuseremail;
    if (req.status === 'exists') {
        const { subject, chapter, difficulty, section, question, selectedoption } = req.body
        const compare_query = 'select answer,explanation from quiz_data where sub="' + subject + '" and chapter="' + chapter + '" and difficulty="' + difficulty + '" and section="' + section + '" and question="' + question + '"';
        dbcon.query(compare_query, async(err, result) => {
            if (result[0].answer !== selectedoption) {
                const exec_query = await insertResultIntoDb(subject, chapter, section, result[0].answer, selectedoption, result[0].explanation, question, user)
                res.json({
                    status: exec_query
                })
            }
        })
    }


})

function insertResultIntoDb(subject, chapter, section, answer, selectedoption, explanation, question, user) {
    return new Promise((resolve, reject) => {
        const insert_query = 'insert into userresult(subject,chapter,section,answer,selectedoption,explanation,question)values("' + subject + '","' + chapter + '","' + section + '","' + answer + '","' + selectedoption + '","' + explanation + '","' + question + '","' + user + '")'
        dbcon.query(insert_query, (err, result) => {
            if (result.affectedRows > 0) {
                resolve('inserted')
            }
        })

    })
}

module.exports = router;