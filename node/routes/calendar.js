const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')

// @desc    Calendar
// @route   GET /calendar
router.get('/calendar', ensureAuth, (req, res) => {
  res.render('calendar', {
    layout: 'calendar',
  })
})


module.exports = router