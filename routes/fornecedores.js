const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Sucesso usando rota GET Fornecedores'
    })
});

// POST
router.post('/', (req, res, next) => {
    const fornecedor = {
        id_fornecedor: req.body.id_fornecedor,
        nameFornecedor: req.body.name_fornecedor
    }
    res.status(201).send({
        message: 'Sucesso usando rota POST Fornecedores',
        fornecedorCriado: fornecedor
    })
});


// GET ID - FORNECEDOR
router.get('/:id_fornecedor', (req, res, next) => {
    const id = req.params.id_fornecedor
    if (id === '10') {
        res.status(200).send({
            message: `Este ID está dentro de uma regra especifica == ${id}`,
        });
    } else {
        res.status(200).send({
            message: `Sucesso no GET do fornecedor por id == ${id}`,
        });
    }
});

// POST ID - FORNECEDOR
router.post('/:id_fornecedor', (req, res, next) => {
    const id = req.params.id_fornecedor
    res.status(200).send({
        message: "Sucesso no POST do fornecedor por",       
    })
});


// DELETANDO FORNECEDORES
router.delete('/', (req, res, next) => {    
    res.status(200).send({
        message: 'Deletando fornecedor'
    })
});

// PATCH ou LISTAGEM FORNECEDOR
router.patch('/', (req, res, next) => {    
    res.status(200).send({
        message: 'Listando todos os fornecedor'
    })
});

module.exports = router;