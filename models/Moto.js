import { Schema, model } from "mongoose";

let collection = 'motos'
let schema = new Schema({
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    cambios: { type: Number, required: true },
    abs: { type: Boolean, required: true }
}, {
    timestamps: true
})
let Moto = model(collection, schema)
export default Moto