import { getAllUsersDal, getUserByEmailDal, getUserByNameDal, getUserByPasswordDal, registerUserDal } from "../DAL/user.dal.js";
import {comparePassword, hashPassword } from "../utils/password.js";
import { generateToken, verifyToken} from "../utils/generateToken.js";

export const registerUserCtrl = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const hashPass = await hashPassword(password)
        console.log(hashPass);
        const oneUser = { userName, email, password: hashPass};
        const result = await registerUserDal(oneUser);
        console.log(result);
        res.send(result);
    } catch (error) {
        console.error(error);
    }
};

export const gatAllUsersCtrl = async(_req, res) => {
    try {
        const result = await getAllUsersDal();
        result.filter((obj) => {
            return delete obj.password;
        });
        console.log(result);
        res.send(result);
    } catch (error) {
        console.error(error);
    };
};