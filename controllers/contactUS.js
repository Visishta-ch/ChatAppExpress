const path = require('path')
const rootDir = require('../util/path')

exports.getContactUs = (req,res,next)=>{
    
    res.sendFile(path.join(rootDir, 'views','contactUs.html'))
}

exports.getSuccess = (req,res,next)=>{
    console.log(req.body)
    res.send(`<h1>Form filled successfully</h1>`)
    
}