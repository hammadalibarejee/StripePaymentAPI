const app=require('./app');

require('dotenv').config('config.env');
const PORT=process.env.PORT||3000;

const server=app.listen(PORT,()=>{
    console.log(`The app is listening on ${PORT}`);
})