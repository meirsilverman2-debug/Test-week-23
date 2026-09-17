import db from "../db/mongodb.js";
import { ObjectId } from "mongodb";


const usersCollection = db.collection("users-db-collection");


// Create:
export async function registerUserDal({userName, email, password }){
    const newUser = {userName, email, password }
    const result = await usersCollection.insertOne(newUser);
    console.log(`A new user was successfuly register into the system with the _id: ${result.insertedId}`);
    result.userName = newUser.userName;
    result.email = newUser.email;
    delete result.acknowledged;
    // `user name: ${result.userName} and _id: ${result.insertedId} and email: ${result.email}`
    return result
};


// export async function loginUserDal(){

// };


export async function getUserByEmailDal(email){
    const result = await usersCollection.findOne({}, {}, {})

};


export async function getUserByNameDal(){

};


export async function getUserByPasswordDal(){

};


export async function getAllUsersDal(){
    const result = await usersCollection.find().toArray();
    return result;
};