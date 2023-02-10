import mongoose from "mongoose";
const postSchema=mongoose.Schema({
    companyName:{
        type:String,
        required:true,
    },
    experienceRequired:{
        type:String,
        required:true,
    },
    eligibilityCriteria:{
        type:String,
        required:true,
    },
    jobDescription:{
        type:String,
        required:true,
    },
    jobUrl:{
        type:String,
        required:true,
    },
    jobType:{
        type:String,
        required:true,
    },
    logoUrl:{
        type:String,
        required:true,
    }
    },
    {timeStamp:true}
);

const Post=mongoose.model("Post",postSchema);

export default Post;