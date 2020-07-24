const express = require('express');
const helmet = require('helmet');
const Joi = require('joi');
const config = require('config');
const debug = require('debug');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

require('./startup/routes')(app);
//require('./startup/cors')(app);
require('./startup/db')();
debug('Connected to the database...');

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
