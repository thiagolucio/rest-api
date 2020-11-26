const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Sucesso usando rota GET Animais'
    })
});

// POST
router.post('/', (req, res, next) => {
    const animal = {
        id_animal: req.body.id_animal,
        nameAnimal: req.body.name_animal
    }
    res.status(201).send({
        message: 'Sucesso usando rota POST Animais',
        animalCriado: animal
    })
});


// GET ID - ANIMAL
router.get('/:id_animal', (req, res, next) => {
    const id = req.params.id_animal
    if (id === '10') {
        res.status(200).send({
            message: `Este ID está dentro de uma regra especifica == ${id}`,
        });
    } else {
        res.status(200).send({
            message: `Sucesso no GET do Animais por id == ${id}`,
        });
    }
});

// POST ID - ANIMAL
router.post('/:id_animal', (req, res, next) => {
    const id = req.params.id_animal
    res.status(200).send({
        message: "Sucesso no POST do Animal por",       
    })
});


// DELETANDO ANIMAL
router.delete('/', (req, res, next) => {
    res.status(200).send({
        message: 'Deletando Animal'
    })
});

// PATCH ou LISTAGEM ANIMAL
router.patch('/', (req, res, next) => {
    res.status(200).send({
        message: 'Listando todos os Animais'
    })
});

module.exports = router;