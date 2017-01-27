import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    text: String
})

export default mongoose.model('Todo', todoSchema)
