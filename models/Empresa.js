import mongoose from 'mongoose';

const empresaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    sector: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true }
});

export default mongoose.model('Empresa', empresaSchema);
