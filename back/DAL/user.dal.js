import db from "../db/mongodb.js";
import { ObjectId } from "mongodb";


const users = db.collection("users-db-collection");


// Create:
export async function registerUserDal({userName, email, password }){
    const newUser = {userName, email, password }
    const result = await users.insertOne(newUser);
    console.log(`A new user was successfuly register into the system with the _id: ${result.insertedId}`);
    return result; 
};


export async function loginUserDal(){

};


export async function getUserByEmailDal(){

};


export async function getUserByNameDal(){

};


export async function getUserByPasswordDal(){

};


export async function getAllUsersDal(){

};