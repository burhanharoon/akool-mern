import mongoose from 'mongoose'

const creationToolSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
)

const CreationTool = mongoose.model('CreationTool', creationToolSchema)

export default CreationTool