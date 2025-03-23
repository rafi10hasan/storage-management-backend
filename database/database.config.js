const mongoose = require('mongoose');

const DATABASE_URL = process.env.DB_URL

async function connectDB(){
    try{
        const connection = mongoose.connect(DATABASE_URL.toString()).then(()=>{
            console.log('Database Connected Successfully!');
        })
        return connection;
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB