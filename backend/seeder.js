import dotenv from 'dotenv'
import CreationTool from './models/creationToolModel.js'
import RecognitionTool from './models/recognitionToolModel.js'
import connectDB from './config/db.js'
import { creationTools } from './data/creationTools.js'
import { recognitionTools } from './data/recognitionTools.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await CreationTool.deleteMany()
        await RecognitionTool.deleteMany()

        await CreationTool.insertMany(creationTools)
        await RecognitionTool.insertMany(recognitionTools)

        console.log('Data Imported!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await CreationTool.deleteMany()
        await RecognitionTool.deleteMany()

        console.log('Data Destroyed!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}