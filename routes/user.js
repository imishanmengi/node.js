const express = require('express');
const sequelize = require('../util/database');

const router = express.Router();

const usercontroller = require('../controller/user');


router.post('/add-user' ,usercontroller.adduser)

router.get('/get-users',usercontroller.getuser)

router.delete('/delete-user/:id' , usercontroller.deleteuser)

// router.use(errorController.get404);
// sequelize.sync().then(result =>{
//     console.log(result);
//     // app.listen(3000);
// })
// .catch((err)=>{
//     console.log(err)
// });


// app.use((req,res,next)=>{
//     res.status(404).send('<h1> page not found </h1>');

// })

// sequelize.sync().then(result=>{

//     // console.log(result);
//     app.listen(19000);
// })

// .catch(err=>{
//     console.log(err);
// })

module.exports=router;



