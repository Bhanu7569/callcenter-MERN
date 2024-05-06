const express = require('express');
const { Register, Login} = require('../Controllers/UserController.js'); 
const {AddContact,  Getcontact, Deletecontact } = require('../Controllers/addcontact.js')

const router = express.Router();

router.post('/register', Register);
router.post('/login', Login);
router.post('/addaccount', AddContact);
router.get('/getaccount', Getcontact);
router.delete('/deleteaccount/:id', Deletecontact)
module.exports = router;
