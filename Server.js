import express from 'express'

const app = express()

app.get('/usuarios', function (req,res) {
    res.send('Ok,deu bom')
    
})

app.listen(3000)