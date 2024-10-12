import 'dotenv/config.js'
import '../../config/database.js'
import Animal from '../Animal.js'

const animales = [
    { nombre: "Águila", volar: true, nadar: false, ojos: 2 },
    { nombre: "Tiburón", volar: false, nadar: true, ojos: 2 },
    { nombre: "Araña", volar: false, nadar: false, ojos: 8 },
    { nombre: "Mosca", volar: true, nadar: false, ojos: 2 },
    { nombre: "Pulpo", volar: false, nadar: true, ojos: 2 },
    { nombre: "Escarabajo", volar: true, nadar: false, ojos: 2 },
    { nombre: "Hormiga", volar: false, nadar: false, ojos: 2 },
    { nombre: "Dragón de Komodo", volar: false, nadar: true, ojos: 2 },
    { nombre: "Cangrejo", volar: false, nadar: true, ojos: 10 },
    { nombre: "Avispa", volar: true, nadar: false, ojos: 5 }
];

Animal.insertMany(animales)