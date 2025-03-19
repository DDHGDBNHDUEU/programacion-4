import EmpleadoRef from '../models/EmpleadoRef.js';
import express from "express"
const router = express.Router();

router.get('/', async (req, res) => {
    const empleados = await EmpleadoRef.find().populate('empresa_id');
    res.json(empleados);
});

router.post('/', async (req, res) => {
    const nuevoEmpleado = new EmpleadoRef(req.body);
    await nuevoEmpleado.save();
    res.status(201).json(nuevoEmpleado);
});

router.put('/:id', async (req, res) => {
    const empleadoActualizado = await EmpleadoRef.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(empleadoActualizado);
});

router.delete('/:id', async (req, res) => {
    await EmpleadoRef.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

export default router;