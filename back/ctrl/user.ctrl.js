import {getAllUsersDal, getUserByEmailDal, getUserByNameDal, getUserByPasswordDal, loginUserDal, registerUserDal} from "../DAL/user.dal.js";
import { } from "../utils/password.js";
import { } from "../utils/generateToken.js";

export const registerUserCtrl = async (req, res) => {
    try {
        const {userName, email, password} = req.body;
        const hashPassword = ''
        const oneUser = {userName, email, password: hashPassword};
        const result = await registerUserDal(oneUser);
        console.log(result);
        
        res.send(result);
    } catch (error) {
        console.error(error); 
    }
};