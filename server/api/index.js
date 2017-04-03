const api = require('express').Router();
const profiles = require('./profiles');
const thumbnails = require('./thumbnail_srcs');

api
  .get('/profiles', (req, res) => {
    res.json(profiles);
  })
  .get('/thumbnails', (req, res) => {
    res.json(thumbnails);
  });

api.use((req, res) => res.status(404).end());

module.exports = api;
