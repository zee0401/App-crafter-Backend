import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connectdb.js";
import resourceRoutes from "./routes/resources-routes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api", resourceRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
