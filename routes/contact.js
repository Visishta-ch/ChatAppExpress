const path = require('path')
const express = require('express')
const rootDir = require('../util/path')
const router = express.Router()

router.get('/contact-us',(req,res,next)=>{
    
    res.sendFile(path.join(rootDir, 'views','contactUs.html'))
});

router.post('/success',(req,res,next)=>{
    console.log(req.body)
    res.send(`<h1>Form filled successfully</h1>`)
    
})

module.exports = router;