import express from 'express'

const app = express()
app.use(express.json())

const Users = []

app.post('/usuarios', function (req,res) {
    Users.push(req.body)

    res.send('Ok post')
    
})

app.get('/usuarios', function (req,res) {
    res.json(Users)
    
})

app.listen(3000)