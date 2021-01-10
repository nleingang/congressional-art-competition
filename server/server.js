
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const artRouter = require('./routes/art.router');
const voterRouter = require('./routes/voter.router');
const voteRouter = require('./routes/vote.router');
const UploaderS3Router = require("react-dropzone-s3-uploader/s3router");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/art', artRouter);
app.use('/api/voters', voterRouter);
app.use('/api/votes', voteRouter);

//s3 photo upload
// app.use(
//   "/s3",
//   UploaderS3Router({
//     bucket: process.env.S3_BUCKET, // required
//     region: "us-east-1", // optional
//     headers: { "Access-Control-Allow-Origin": "*" }, // optional
//     ACL: "public-read", // this is the default - set to `public-read` to let anyone view upload
//   })
// );

app.use('/s3', require('react-dropzone-s3-uploader/s3router')({
  bucket: process.env.S3_BUCKET,                  // required
  region: 'us-east-1',                            // optional
  headers: {'Access-Control-Allow-Origin': '*'},  // optional
  ACL: 'private',                                 // this is the default - set to `public-read` to let anyone view uploads
}));

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
