import 'dotenv/config'
import express from 'express'
const app = express()
import connectDB from './src/config/db.js'
// port
const port = process.env.PORT || 3000


// Health checker
app.get('/', (req, res)=>{
    res.send('Hello world from backend')
})


// database connection 
connectDB().then(()=>{
app.listen(3000, ()=>{
    console.log(`Server is running on port: ${port}`);
})
})



