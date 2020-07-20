const express = require('express');
const morgan = require('morgan');
const Cors = require('cors');

const middleware = [
  morgan('dev'),
  // ('/uploads', express.static('uploads')),
  // express.static('public'),
  express.urlencoded({ extended: true }),
  express.json(),
  Cors(),
];

module.exports = (app) => {
  middleware.forEach((m) => {
    app.use(m);
  });
};