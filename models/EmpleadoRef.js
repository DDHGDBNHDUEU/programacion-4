import mongoose from 'mongoose';

const empleadoRefSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    empresa_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa', required: true }
});

export default mongoose.model('EmpleadoRef', empleadoRefSchema);
