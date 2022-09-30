import mongoose from 'mongoose'

const connectDatabase = async () => {
  await mongoose.connect(process.env.MONGO_URI as string)
    .then(db => { console.log('MongoDB Servidor conectado', db.connection.host) })
    .catch(err => { console.log('Error en la conexion de la database', err) })
}

export default connectDatabase
