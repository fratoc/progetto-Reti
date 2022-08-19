
const express = require('express')
const passport = require('passport')
const router = express.Router()



// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))



// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('https://6ce272ee915db0.lhrtunnel.link/stories')
  }
)



// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res, next) => {
  req.logout( (err) => {
      if(err){
        return next(err)
      }
      res.redirect('/')
  } )
})



module.exports = router
