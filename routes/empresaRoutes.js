import express from 'express';
import Empresa from '../models/Empresa.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const empresas = await Empresa.find();
    res.json(empresas);
});

router.post('/', async (req, res) => {
    const nuevaEmpresa = new Empresa(req.body);
    await nuevaEmpresa.save();
    res.status(201).json(nuevaEmpresa);
});

router.put('/:id', async (req, res) => {
    const empresaActualizada = await Empresa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(empresaActualizada);
});

router.delete('/:id', async (req, res) => {
    await Empresa.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

export default router;
