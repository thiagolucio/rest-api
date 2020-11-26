const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaUsers = require('./routes/users');
const rotaAnimais = require('./routes/animais');
const rotaFornecedores = require('./routes/fornecedores');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', 'https://servidor-especifico.com.br')
    // Abaixo aceita todos os servidores com asterisco
    res.header('Access-Control-Allow-Origin', '*')
    // Abaixo aceita todos os servidores com asterisco
    res.header(
        'Access-Control-Allow-Header', 
        'Content-Type', 
        'Origin', 
        'X-Requested-Width',
        'Accept',
        'Authorization'
    );
    //Metodos retoarem
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'PATCH', 'DELETE', 'GET');
        return res.status(200).send({});
    }
    next();
});

app.use('/users', rotaUsers);
app.use('/animais', rotaAnimais);
app.use('/fornecedores', rotaFornecedores);


// rota nao encontrada - 404
app.use((req, res, next) => {
    const error = new Error('Rota não existente');
    error.status = 404;
    next(error);    
});

// erro 500 
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        error: {
            message: error.message
        }
    });
});



module.exports = app;