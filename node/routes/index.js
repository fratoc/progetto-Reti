const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')

const Story = require('../models/Story')


// @desc    Login/''home'' page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
  res.render('login', {
    layout: 'login',
  })
})


// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
  try {
    let stories = await Story.find({ user: req.user.id }).lean()
    res.render('dashboard', {
      name: req.user.firstName,
      stories,
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

// @desc    Calendar
// @route   GET /calendar
router.get('/calendar', ensureAuth, (req, res) => {
  res.render('calendar')
})

// @desc    News
// @route   GET /news
router.get('/news', (req, res) => {
  res.render('news')
})

module.exports = router

