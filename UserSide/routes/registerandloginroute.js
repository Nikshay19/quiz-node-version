const express = require('express');
const path = require('path');
const localstorage = require('local-storage')
const router = express.Router();
router.use(express.static(path.join(__dirname, "../public")))
router.get('/', (req, res) => {
    localstorage.clear();
    res.sendFile(path.join(__dirname, "../public/registerandlogin.html"))
})
module.exports = router;