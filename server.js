const express = require('express');
const helmet = require('helmet');
const Joi = require('joi');
const config = require('config');
const debug = require('debug');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(express.json())
app.use(helmet());
app.use(cors());

require('./startup/routes')(app);
require('./startup/db')();
require('./startup/validation')();
require("./startup/config")();
debug('Connected to the database...');


const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});

module.exports = server;
