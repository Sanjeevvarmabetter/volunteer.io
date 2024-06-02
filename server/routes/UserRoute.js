const { userDetails } = require('../controllers/UserController')
const router = require('express').Router()

router.get('/userdetails/:username', userDetails)
module.exports = router
