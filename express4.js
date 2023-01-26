const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./util/database');

const adminRoutes= require('./routes/admin')
const shopRoutes=require('./routes/shop')
const contactusRoutes=require('./routes/contactus')

db.execute('SELECT * FROM products')
.then((result)=>{
    console.log(result[0]);
})
.catch(err=>{
    console.log(err);
});

app.use(bodyParser.urlencoded({extended: false}));
app.use('/house',adminRoutes);
app.use(shopRoutes);
app.use(contactusRoutes);


app.use((req,res,next)=>{
    res.status(404).send('<h1> page not found </h1>');

})





app.listen(34000);