import 'dotenv/config'
import express from 'express'
const app = express()
import connectDB from './src/config/db.js'
import userRouter from './src/routes/user.routes.js'
// port
const port = process.env.PORT


// Health checker
app.get('/', (req, res)=>{
    res.send('Hello world from backend')
})

app.use(express.json())
app.use('/api/users', userRouter)


// database connection 
connectDB()

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})



