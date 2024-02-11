import mongoose from "mongoose";
const postSchema =mongoose.Schema({
    tilte : String,
    message : String,
    creater : String,
    tags : [String],
    selectedFiles : String,
    likeCount :{
        type : Number,
        default : 0
    },
    createdAt : {
        type : Date,
        default : new Date()
    },
});

const postMessage = mongoose.model('postMessage',postSchema);

export default postMessage;