import express from "express";
import{
    getLatestPosts,
    getFreshersPost,
    getExperienceJobs,
} from "../controllers/posts.js"
const router=express.Router();
router.get("/freshersjobs",getFreshersPost);
router.get("/experiencedjobs",getExperienceJobs);
router.get("/latestjobs",getLatestPosts);

export default router;