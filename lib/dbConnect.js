import mongoose from "mongoose";
const connection = {};

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}

if (!MONGODB_DB) {
    throw new Error(
        "Please define the MONGODB_DB environment variable inside .env.local"
    );
}

async function dbConnect() {
    if (connection.isConnected) {
        console.log('Already Connected');
        return;
    } 

    const db = await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    });

    connection.isConnected = db.connections[0].readyState;
    console.log('DB Connected!');
}

export default dbConnect;


