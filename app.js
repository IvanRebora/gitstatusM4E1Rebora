const express = require('express');
const app = express();
const path = require('path');
const puerto = process.env.PORT


const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');

app.listen(puerto || 3000, () =>{
    console.log('Servidor corriendo en el puerto 3000')
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');
});