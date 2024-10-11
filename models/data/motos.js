import 'dotenv/config.js'
import '../../config/database.js'
import Moto from '../Moto.js'

const motos = [
    { marca: "Yamaha", modelo: "MT-07", cambios: 6, abs: true },
    { marca: "Honda", modelo: "CB125F", cambios: 5, abs: false },
    { marca: "Kawasaki", modelo: "Ninja 400", cambios: 6, abs: true },
    { marca: "Harley-Davidson", modelo: "Sportster 1200", cambios: 5, abs: false },
    { marca: "Suzuki", modelo: "GSX-R750", cambios: 6, abs: false },
    { marca: "Honda", modelo: "Super Cub C125", cambios: 4, abs: true },
    { marca: "BMW", modelo: "G310R", cambios: 6, abs: true },
    { marca: "Kawasaki", modelo: "KLX 110", cambios: 4, abs: false },
    { marca: "Honda", modelo: "CRF110F", cambios: 4, abs: false },
    { marca: "Ducati", modelo: "Scrambler Icon", cambios: 6, abs: true }
  ];
Moto.insertMany(motos)