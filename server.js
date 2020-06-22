const express = require('express');
const path = require('path')
const app = express();

const port = process.env.PORT || 8081;

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
})

app.listen(port, ()=>{
    console.log('Add Page is running on port ' + port);
})