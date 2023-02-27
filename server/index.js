import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import helmet from "helmet";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js"
import {getInternship} from "./controllers/posts.js"
import { createJob } from "./controllers/posts.js";
import bodyParser from "body-parser";
import Post from "./model/posts.js";
import { posts } from "./data/index.js";

const app=express();
dotenv.config();
app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());
app.use("/jobs",postRoutes);
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/internships",getInternship);

// app.post("/postrequest")
const PORT=process.env.PORT||6001;
app.post("/postjob",createJob);
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT,()=>console.log(`server Post: ${PORT}`));
    // Post.insertMany(posts)
}).catch((error)=>console.log(`${error} did not connect`));