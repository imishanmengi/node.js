const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const errorController = require('./controller/error');

const sequelize = require('./util/database');
const User = require('./models/User')
var cors = require('cors');
const app = express();
app.use(cors());

app.set('view engine','ejs');
app.set('views','views');

const adminRoutes= require('./routes/admin')
const shopRoutes=require('./routes/shop')
const contactusRoutes=require('./routes/contactus');
// const User = require('./models/User');
const userRoutes = require('./routes/user');

// db.execute('SELECT * FROM products')
// .then((result)=>{
//     console.log(result[0]);
// })
// .catch(err=>{
//     console.log(err);
// });

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/house',adminRoutes);
app.use(shopRoutes);
app.use(contactusRoutes);
app.use('/user',userRoutes);
app.listen(3000,()=>{
    console.log("server has started");
})
