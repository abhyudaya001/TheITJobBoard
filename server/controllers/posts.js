import Post from "../model/posts.js"
export const createJob=async(req,res)=>{
    console.log("hey");
    try{
        console.log(req.body);
        const{companyName,experienceRequired,eligibilityCriteria,jobDescription,jobUrl,jobType,logoUrl} = req.body;
        console.log(experienceRequired);
        const newJob=new Post({
            companyName,
            experienceRequired,
            eligibilityCriteria,
            jobDescription,
            jobUrl,
            jobType,
            logoUrl,
        });
        await newJob.save();
        const job = await Post.find();
        res.status(201).json(job);
    } catch (err) {
    res.status(409).json({ message: err.message });
  }
}
export const getLatestPosts= async(req,res)=>{
    try{
        const post = await Post.find().sort({ createdAt: -1 }).limit(5);
        res.status(200).json(post);
    }catch(err){
        res.status(400).json({message:err.message});
    }
}
export const getFreshersPost=async(req,res)=>{
    try{
        const post = await Post.find({ experienceRequired: "Freshers" }).sort({ createdAt: -1 });
        res.status(200).json(post);
    }catch(err){
        res.status(400).json({message:err.message});
    }
}
export const getExperienceJobs=async(req,res)=>{
    try{
        const post = await Post.find({ experienceRequired: { $ne: "Freshers" } }).sort({ createdAt: -1 });
        res.status(200).json(post);
    }catch(err){
        res.status(400).json({message:err.message});
    }
}
export const getInternship=async(req,res)=>{
    try{
        const post =await Post.find({jobType : "Internship"});
        res.status(200).json(post);
    }catch(err){
        res.status(400).json({message:err.message});
    }
}