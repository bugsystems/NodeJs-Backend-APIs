var express = require('express');
var router = express.Router();

const connection = require('../config');

// Home page route.
router.get('/', function(req, res) {
  res.send('Wiki home page');
});

// Personnel page route.
router.get('/users', function(req, res) {
  connection.query('SELECT * FROM personnel LIMIT 0, 10', function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.json(results);
  });
});

//Tasks page
router.get('/tasks', function(req, res) {
  connection.query('SELECT * FROM task LIMIT 0, 10', function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.json(results);
  });
});

//Login page
router.get('/login', function(req, res) {
  connection.query('SELECT * FROM user LIMIT 0, 10', function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.json(results);
  });
});

module.exports = router;
