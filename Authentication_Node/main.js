const express = require('express')
const connectToDB = require('./src/Utils/db')
const app = express()
const PORT = 3000
const authRoutes = require('./src/routes/auth-routes')

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.use(authRoutes)

app.listen(PORT, () =>{
 console.log(`Example app listening on port ${PORT}!`)
 connectToDB()
})