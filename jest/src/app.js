const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/tasks',(req, res)=>{
    res.json([])
})

module.exports = app; 
