const express = require('express')
const router = express.Router()

// @desc    About us page
// @route   GET /about
router.get('/about', (req, res) => {
    res.render('about', {
      layout: 'about',
    })
  })
  
  module.exports = router