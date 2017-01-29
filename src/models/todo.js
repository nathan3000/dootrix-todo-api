import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    id: String,
    text: String,
    completed: Boolean    
})

export default mongoose.model('Todo', todoSchema)
