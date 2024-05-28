const express = require('express')

const app = express ()



app.use('/page1',(req, res) => {
    res.send('<h1>Hello From Express Page 1</h1>')
})

app.use('/page2',(req, res) =>{
    res.send('<h1>Hello From Express Page 2</h1>')

})

app.use('/',(req, res, next) =>{
    res.send('<h1>Hello From Express </h1>')
} )

app.listen(8000,() =>{
    console.log('Server is running at port 8000')
})