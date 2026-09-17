import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;


// Gets a user id and then creates an auth token from it that has rhree parts:
export function generateToken(userId){
    return jwt.sign({userId}), JWT_SECRET, {expiersIn: process.env.WT_EXPIERSIN}
};


// Get a already existed token and a jwt secret and than it verify that it with the jwt secret:
export function verifyToken(token, JWT_SECRET){
    return jwt.verify(token, JWT_SECRET);
};