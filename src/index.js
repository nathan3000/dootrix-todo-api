import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport'
import jwt from 'jsonwebtoken'
import initializeDb from './config/db';
import middleware from './middleware';
import api from './api';
import config from './config/config.json';
import dotenv from 'dotenv'

dotenv.config()

let app = express();
app.server = http.createServer(app);

app.use(passport.initialize())

// 3rd party middleware
app.use(cors({
	origin: 'https://serene-scrubland-16985.herokuapp.com',
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));


// connect to db
initializeDb( db => {

	// internal middleware
	app.use(middleware({ config, db }));

	// api router
	app.use('/api', api({ config, db, passport }));

	app.server.listen(process.env.PORT || config.port);

	console.log(`Started on port ${app.server.address().port}`);
});

export default app;
