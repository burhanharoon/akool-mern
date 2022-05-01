import dotenv from 'dotenv'
import CreationTool from './models/creationToolModel.js'
import RecognitionTool from './models/recognitionToolModel.js'
import ToolDetail from './models/toolDetailModel.js'
import connectDB from './config/db.js'
import { creationTools } from './data/creationTools.js'
import { recognitionTools } from './data/recognitionTools.js'
import { toolDetails } from './data/toolDetails.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await CreationTool.deleteMany()
        await RecognitionTool.deleteMany()
        await ToolDetail.deleteMany()

        await CreationTool.insertMany(creationTools)
        await RecognitionTool.insertMany(recognitionTools)
        await ToolDetail.insertMany(toolDetails)


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
        await ToolDetail.deleteMany()

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