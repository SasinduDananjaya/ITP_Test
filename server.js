import express from 'express'
//DB and AuthenticateUser
import connectDB from './db/connect.js'
import dotenv from 'dotenv'
dotenv.config()

import 'express-async-errors'
import morgan from 'morgan'

//routers
import authRouter from './routes/authRoutes.js'
import repairRouter from './routes/repairsRoutes.js'



//middleware
import notFoundMiddleware from './middleware/not-found.js'
const app = express()

//Error Handler
import errorHandlerMiddleware from './middleware/error-handler.js'
//Auth middleware
import authenticateUser from './middleware/auth.js'

if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({msg : 'Welcome!'})
})

app.get('/api/v1',(req,res)=>{
    res.json({msg : 'API'})
})

app.use('/api/v1/auth', authRouter)

///*Extra -->*/app.use('/api/v1/all-repairs', authenticateUser, repairRouter)

app.use('/api/v1/repairs', authenticateUser, repairRouter)



app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000


const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () =>{
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()