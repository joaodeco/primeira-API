const express = require ('express')
const app = express()
const porta = 3000

app.get('/', (req, res)  => {
    res.send ('Olá, essa é a pagina principal seja bem vindo :)')
})

app.get('/info', (req, res)  => {
    res.send('Essa API foi feita pelo Deco 🤠')
})

app.listen(porta, () => {
    console.log('Escutando em http://localhost:300 !')
})
