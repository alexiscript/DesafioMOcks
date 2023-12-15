import mongoose from 'mongoose'
import envConfig from './envConfig.js';
import dotenv from "dotenv";
dotenv.config();


const URI = envConfig.mongoUri

mongoose.connect(URI)
.then(() => {
    console.log("Conectado con exito a la base de datos");
})
.catch((error) => {
    console.log(error)
})