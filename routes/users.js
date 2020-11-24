const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Sucesso usando rota GET usuários'
    })
});

// POST
router.post('/', (req, res, next) => {
    const user = {
        id_user: req.body.id_user,
        nameUser: req.body.name_user
    }
    res.status(201).send({
        message: 'Usuário criado com Sucesso!',
        userCriado: user 
    })
});


// GET ID - USER
router.get('/:id_user', (req, res, next) => {
    const id = req.params.id_user
    if (id === '10') {
        res.status(200).send({
            message: `Este ID está dentro de uma regra especifica == ${id}`,
        });
    } else {
        res.status(200).send({
            message: `Sucesso no GET do usuário por id == ${id}`,
        });
    }
});

// POST ID - INSERE USER
router.post('/:id_user', (req, res, next) => {
    const id = req.params.id_user
    res.status(200).send({
        message: 'Usuário Alterado com sucesso!',
            
    })
});

// DELETANDO USUARIOS
router.delete('/', (req, res, next) => {    
    res.status(200).send({
        message: 'Deletando usuarios'
    })
});

// PATCH ou LISTAGEM USERS
router.patch('/', (req, res, next) => {    
    res.status(200).send({
        message: 'Listando todos os usuários'
    })
});

module.exports = router;