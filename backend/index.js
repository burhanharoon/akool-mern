import express, { json } from 'express'
import dotenv from "dotenv"
import connectDB from './config/db.js'
import bodyparser from 'body-parser'
import toolRoutes from './routes/toolRoutes.js'


dotenv.config();

connectDB();

const app = express()

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


app.use('/api/tool', toolRoutes)
app.get('/', (req, res) => {
    res.send("Api is running 🚀")
})


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))