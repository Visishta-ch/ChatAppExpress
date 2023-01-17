const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');


app.use(bodyParser.urlencoded({ extended: false }));
/*login page */
app.get('/login',(req,res,next)=>{
    res.send(`<html>
            <h1>Chat App</h1>  
            <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/" method="POST">

	<input id="username" type="text" name="username">

	<button type="submit">add</button>

    </form>
        </html>`)
    
})
/*sending messages */
app.get('/',(req,res,next)=>{
    fs.readFile('username.txt', (err, data)=>{
        if(err){
            data = `no chat`
            console.log(err);
        }

        res.send(`${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" 
        method="POST">
            <input id ='message' name="message" type="text" placeholder="Enter Message"/>
            <input id="username" type="hidden" name="username">
    
            <button type="submit">Send Msg</button>
    
        </form>`)
    })
   
});

app.post('/', (req,res)=>{
    console.log(req.body)
    console.log(req.body.username);
    console.log(req.body.message)
    fs.writeFile('username.txt', `${req.body.username} - ${req.body.message}`, {flag:'a'}, (err)=>{
        err ? console.log(err) : res.redirect('/')
    })
})

// app.use('/',(req,res,next)=>{
//     res.send(`<html>
//     <h1>Chat App</h1>  
//     </html>`)
// }).


app.listen(3000);