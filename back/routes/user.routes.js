import express from "express";
import { timeLog, helloLog } from "../middlewhere/user.middlewhere.js";
import {registerUserCtrl} from "../ctrl/user.ctrl.js";

const router = express.Router();


router.use(timeLog, helloLog);

router.post(
    "/register",
    registerUserCtrl
);


router.post(
    "/login",
    (req, res) => {
        res.send("login")
    }
);


router.get(
    "/users",
    (req, res) => {
        res.send("users")
    }
);

export default router;








