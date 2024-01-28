import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log('MongoDb database is connected')
}).catch((err) => {
    console.log(err)
})

const app = express()

app.use('/api/user', userRoutes)


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})