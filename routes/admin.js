const path = require('path');
const express = require('express');

const router = express.Router();



router.get('/house',(req,res,next)=>{
   res.sendFile(path.join(__dirname,'views','app-product.html'));
});
router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});


module.exports =router;