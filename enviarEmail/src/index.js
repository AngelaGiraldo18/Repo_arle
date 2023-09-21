const express = require ('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(require('./routes/index.js'))

app.use(express.static(path.join(__dirname, 'public')))
app.listen(3001, ()=>{
    console.log('servidor en el puerto 3001');
})