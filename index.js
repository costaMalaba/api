import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import referral from "./routes/admin.js";

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}))

//Paths
app.use("/referral", referral);

const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.json("Hello PRMS");
});

app.listen(PORT, (
    console.log(`App listening on port ${PORT}`)
));