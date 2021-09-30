require('dotenv').config()

const express = require("express")

const server = express()

server.use(express.json())

let users = [{"username": "steve", "password": "123"},{"username": "dave", "password": "blahblah"}]

server.get('/api/users', (req, res)=>{
    try{
    res.json(users)
    } catch (err){
        res.json(err)
    }
})

server.post('/api/users', (req, res)=>{
    try {
        if (!req.body.username || !req.body.password){
            res.status(400).json({message: "error errrr"})
        } else {
            users.push(req.body)
            res.status(200).json(users)

        }
    } catch (err){
        res.status(500).json(err)
    }
})

server.post('/api/login', (req, res)=>{
    try {
        users.forEach(item=>{
            if (item.username === req.body.username && item.password === req.body.password){
                res.json({message:"welcome"})
            } else {
                res.json({message: "user not found"})
            }
        })
    } catch (err){
        res.json(err)
    }
})



server.get('/hello', (req, res)=>{
    res.send('<h1>hello</h1>')
})

const port = process.env.PORT

server.listen(port, ()=>{
    console.log(`server up on ${port}`)
})