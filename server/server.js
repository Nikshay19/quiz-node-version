const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const adminroute = require('./routes/adminroute');
const datainsertionroute = require('./routes/insertquizdataroute');
const retrievedata = require('./routes/retrievedataroute');
const displaysubjects = require('./routes/displaysubjectcardsroute');
const displaydiff = require('./routes/displaydiffroute');
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port} `)
});
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/admin', adminroute);
app.use('/insert_quiz_data', datainsertionroute);
app.use('/getdata', retrievedata);
app.use('/displaysubjectcard', displaysubjects);
app.use('/displaydifficulty', displaydiff);