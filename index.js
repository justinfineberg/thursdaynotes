require('dotenv').config()

const express = require("express")

const server = express()

server.use(express.json())

server.get('/', (req, res)=>{
    res.json({message: 'blah blah blah!'})
})

server.get('/hello', (req, res)=>{
    res.send('<h1>hello</h1>')
})

const port = process.env.PORT

server.listen(port, ()=>{
    console.log(`server up on ${port}`)
})