const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const loginregister = require('./routes/registerandloginroute');
const homepage = require('./routes/homepageroute');
const saveuserdata = require('./routes/saveuserregistrationroute');
const checkuserexists = require('./routes/checkifuserexistsroute');
const port = process.env.PORT || 4000;
const app = express();
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));
app.use('/', loginregister);
app.use('/homepage', homepage);
app.use('/saveuser', saveuserdata);
app.use('/checkuserexists', checkuserexists);