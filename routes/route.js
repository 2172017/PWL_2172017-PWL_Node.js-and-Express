const express = require('express')

const  router =express.Router()

router.get('/page1',(req, res) => {
    res.send(`
<form method="post" action="/page2"> 
<label for=" name-id"> Name</label>
<input type="text" id=" name-id" name="name" autofocus> 
<button type="submit"> Submit </button> 
</form>` )
})

router.post('/page2',(req, res) =>{
    console.log(req.body)
    res.send(`<h1>Hello From Express Page 2</h1> <p>Hello, ${req.body.name}</p>`)

})

router.get('/',(req, res, next) =>{
    res.send('<h1>Hello From Express </h1>')
} )

module.exports =router

