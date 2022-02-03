const express = require('express');
const controller=require('./controller');

const router=express.Router();

router.route('/payment')
    .post(controller.StripePayment);

module.exports=router;    
