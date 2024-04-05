const express = require('express');
const router = express.Router();
const auth = require('./auth.js')

// Middleware to protect routes
router.use(auth);

// Implement URL routes (shorten, redirect, statistics, etc.)

module.exports = router;
