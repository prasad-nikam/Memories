import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import router from './routes/posts.js';

const app=express();

app.use('/posts',router);

app.use(bodyParser.json({limit:"30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://memories:memosa123@cluster0.xqconyq.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT | 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> app.listen(PORT, ()=>console.log(`Server running on port http://localhost:${PORT}`)))
    .catch((error)=>console.log("fail to connect to MongoDB: "+error.message));

app.get('/',(req,res)=>{
    res.send("Prasad's Full Stack Project");
});

app.get('/hello',(req,res)=>{
    res.send("hello dipak");
});