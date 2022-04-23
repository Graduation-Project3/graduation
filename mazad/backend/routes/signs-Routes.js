const express = require('express');
    
const router = express.Router();

const signsController = require('../controllers/signs');

router.post('/signUp',signsController.postSignUp);
router.post('/signIn',signsController.postSignIn);



module.exports = router;
