const api = require('express').Router();
const profiles = require('./profiles');
const thumbnailSrcs = require('./thumbnail_srcs');

api
  .get('/profiles', (req, res) => {
    res.json(profiles);
  })
  .get('/thumbnail_srcs', (req, res) => {
    res.json(thumbnailSrcs);
  });

module.exports = api;
