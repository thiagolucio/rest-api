const express = require('express');
const app = express();

const resOk = 'https://http.cat/200';


app.use((req, res, next,) => {
    res.status(200).send({        
        mensagem: resOk
    });
});

module.exports = app;