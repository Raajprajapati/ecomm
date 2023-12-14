const app = require('./app.js');
const dotenv = require('dotenv');

dotenv.config({path: './backend/config/config.env'})


app.listen(process.env.PORT,()=>{
    console.log(`server is running very fast on national highway: ${process.env.PORT}`)
})
