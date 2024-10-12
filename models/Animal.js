import { Schema, model } from "mongoose";

let collection = 'animales'
let schema = new Schema({
    nombre: { type: String, required: true },
    volar: { type: Boolean, required: true },
    nadar: { type: Boolean, required: true },
    ojos: { type: Number, required: true }
}, {
    timestamps: true
})

let Animal = model(collection, schema)
export default Animal