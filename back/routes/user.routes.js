import express from "express";
import{ timeLog, helloLog }from "../middlewhere/user.middlewhere.js";

const router = express.Router();


router.use(timeLog, helloLog);

router.post(
    "/register",
    (req, res) => {
        res.send("egister")
    }
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








