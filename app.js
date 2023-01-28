const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactRoutes = require('./routes/contact')
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes)
app.use('/admin',contactRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views','pnf.html'))
})

app.listen(3000);