import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRouter from './routes/auth-routes.js';

dotenv.config();
const app = express();

app.use(express.json());

app.listen(3000 , ()=>{
    console.log('server is running on port 3000 ');
});
 
mongoose.connect(process.env.MONGO_DB)
.then(()=>{
  {console.log('connect to mango db')}
}).catch((error)=>{
  console.log(error);
});

app.use('/api/auth' , authRouter);


app.use((err,res,next) =>{
    
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal message error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })

})