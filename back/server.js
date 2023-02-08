const express = require('express')
const userRouter = require('./Routes/userRoutes')

const app = express()

const rooms = ['general', 'tech', 'finance', 'crypto']
const cors = require('cors')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use("user", userRouter)
const db = require('./Connection')


const server = require('http').createServer(app)
const port = 5000
const io = require('socket.io')(server, {
    cors: { 
        origin: 'http://localhost:4000',
        methods: ['GET', 'POST']
    }
})


server.listen(port, () => {
    console.log("server running on ", port);
})

