const mongoose = require('mongoose');

const dbUrl = "mongodb://localhost:27017/crypto-coin-tracker";

const connectToDb = async () => {
     await mongoose.connect(dbUrl);

    const dbConnection = mongoose.connection;

    //set event listener
    dbConnection.on('open', () => {
        console.log('connected to MongoDB');
    })

    dbConnection.on('error', (err) => {
        console.log(`Mongoose connection error: ${err}`);
    })
}

module.exports = {
    connectToDb
}


