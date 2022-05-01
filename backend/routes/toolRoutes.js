import express from 'express'
import CreationTool from '../models/creationToolModel.js'
import RecognitionTool from '../models/recognitionToolModel.js'
import ToolDetail from '../models/toolDetailModel.js'
const router = express.Router()

router.get('/creation', async (req, res) => {
    const creationTools = await CreationTool.find({})
    res.send(creationTools)
})

router.get('/recognition', async (req, res) => {
    const recognitionTools = await RecognitionTool.find({})
    res.send(recognitionTools)
})

router.post('/find/:title', async (req, res) => {
    const title = req.params.title
    const creationTools = await ToolDetail.find({ title })
    res.send(creationTools)
})


router.get("/", (req, res) => {
    res.send("Sending Tool Routes")
})

export default router