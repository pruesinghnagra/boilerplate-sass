const express = require('express')

const db = require('../db/db-functions')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAll()
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
