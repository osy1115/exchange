const express = require('express')
const router = express.Router()

router.use('/api',require('./rpc'))

module.exports = router