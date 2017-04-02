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

api.use((req, res) => res.status(404).end());

module.exports = api;
