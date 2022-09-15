const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')

// @desc    News
// @route   GET /news
router.get('/news', (req, res) => {
    res.render('news', {
      layout: 'news',
    })
  })
  
  module.exports = router