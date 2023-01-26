const path = require('path');
const express = require('express');


const router=express.Router();

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views', 'contactus.html'));

});
router.post('/Product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
   
});

module.exports=router;

