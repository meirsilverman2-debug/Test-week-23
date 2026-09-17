import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import userRouter from "./routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({}));
app.use(express.json());



app.use("/user", userRouter);


// app.use();

app.listen(PORT, (e) => {
    if (e) return console.log(e);
    return console.log(`Server is running on http://localhost:${PORT}`);  
});




