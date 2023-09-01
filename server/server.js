import express from 'express'
import cors  from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import blogsRoute from './routes/BlogsRoutes.js'

dotenv.config();



const app = express();

// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// ROUTE

app.use('/api/blogs', blogsRoute)


// connect to  database

mongoose.connect(process.env.MONGO_URL)
.then(() => {

    app.listen(process.env.PORT, () => {
        console.log('connected and running on port', process.env.PORT)
    })

}).catch((error) => {
   console.log(`Error:${error.message}`)
})
