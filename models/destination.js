import mongoose from 'mongoose'

const Schema = mongoose.Schema

const destinationSchema = new Schema({
    airport: String
})

let Destination = mongoose.model('Destination', destinationSchema)

export{
    Destination
}