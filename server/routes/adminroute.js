const express = require('express');
const path = require('path');
const router = express.Router();
router.use(express.static(path.join(__dirname, "../public")));
router.get('/', (req, res) => {
    console.log(req.params);
    res.render('index.html', { id: 1 })
})
module.exports = router;