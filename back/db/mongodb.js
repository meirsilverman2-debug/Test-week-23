import { MongoClient } from "mongodb";
import dotenv from "dotenv/config";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/";
const client = new MongoClient(MONGODB_URI);

try {
    await client.connect();
    console.log("mongodb is now successfuly connected");
} catch (error) {
    console.error(error);  
};

const db = client.db("users_mongodb");

export default db;
