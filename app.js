const express=require('express');
const bodyParser=require('body-parser');
const cors = require("cors");
const router=require('./routes');
const morgan=require('morgan');
// dotenv.config();


const app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('short'));
app.use('/api',router);


module.exports=app;