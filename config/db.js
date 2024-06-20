const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

let isConnected;

const connectDB = async () => {
    if (isConnected) {
        console.log('Already connected to MongoDB');
        return mongoose.connection;
    }
    
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        isConnected = connection.connections[0].readyState;
        console.log('MongoDB Connected');
        return mongoose.connection;
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
