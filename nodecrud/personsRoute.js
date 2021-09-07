const express = require('express');
const router = express.Router();
const Persons = require('./personsSchema')
//post
router.post('/', async (req, res) => {
    const postPerson = await new Persons({
        Name:req.body.Name,
        Age:req.body.Age
    });
    const savePersons = await postPerson.save();
    res.status(200).json(savePersons)
});
//get persons
router.get('/', async (req, res) => {
    const getAll = await Persons.find();
    res.status(200).json(getAll);
});

//get by id
router.get('/:id', async (req, res) => {
    const getById = await Persons.findById(req.params.id);
    res.status(200).json(getById);
});
//update persons
router.put('/:id', async (req, res) => {
    const updPersons = await Persons.updateOne({ _id: req.params.id }, { $set: { Name: req.body.Name, Age: req.body.Age } })
    res.status(200).json(updPersons);
});

//delete
router.delete('/:id', async (req, res) => {
    const delPersons = await Persons.remove({ _id: req.params.id })
    res.status(200).json(delPersons);
});


module.exports = router;
