import mongoose from 'mongoose'

const recognitionToolSchema = mongoose.Schema(
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

const RecognitionTool = mongoose.model('RecognitionTool', recognitionToolSchema)

export default RecognitionTool