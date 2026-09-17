import bcrypt from "bcrypt"


const SALT_ROUNDS = 10;

// Gets a password and create an hash from it and return in in promise form:
export async function hashPassword(plainPassword, SALT_ROUNDS){
    return bcrypt.hash(plainPassword, SALT_ROUNDS);
};


// Get a password and an hash created from a password and checks if the hash came from this password yes or no meaning true/false and returns a boolean promise:
export async function comparePassword(plainPassword, hashPassword){
    return bcrypt.compare(plainPassword, hashPassword);
};

