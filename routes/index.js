const express = require('express');
const contentController = require('../controller/content')
const userController = require('../controller/user')
const knex = require('../db/knex')

const router = express.Router();
router.post('/Content', contentController.createContent);
router.post('/User', userController.createUser)
 
router.get('/users', (req, res) => {
  try {
    knex("User")
    .then(users => {
      res.status(200).json({
        status: 'ok',
        data: users
      })
    })
  } catch (error) {
    res.status(400).json({
      status: "error",
      data: error
    })
  }
})

router.get('/contents', (req, res) => {
  try {
    knex("Content")
    .then(contents => {
      res.status(200).json({
        status: 'ok',
        data: contents
      })
    })
  } catch (error) {
    res.status(400).json({
      status: "error",
      data: error
    })
  }
})


module.exports = router;