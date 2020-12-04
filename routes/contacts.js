const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')
const controllers = require('../controllers/contact.controllers')
//test routing
router.get('/hello', (req, res) => {
  res.send('hello routing')
})

// @Post method
// @description post contact
// @Path :http://localhost:5000/api/contact/hello
// @Params : Body
router.post('/', controllers.postContact)

// @Method get
// @description : get all contact
// @PATH : http://localhost:5000/api/contact
router.get('/', controllers.getAllContact)

// @Method get
// @description : get one contact
// @PATH : http://localhost:5000/api/contact/:id
// @Params : id
router.get('/:id', controllers.getOneContact)

// @Method delete
// @description delete one contact by id
// @Path : http://localhost:5000/api/contact/:id
// @Params : id
router.delete('/:id', controllers.deleteOneContact)

// @Method Put
// @description : update contact by id
// @Path : http://localhost:5000/api/contact/:id
// @Params : id Body
router.put('/:id', controllers.updateOneContact)

module.exports = router
