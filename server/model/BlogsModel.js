import mongoose from "mongoose";

const blogsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    aurthor: {
        type: String,
        required: true
    }
},{timestamps: true});

const BlogsDb = mongoose.model('BlogsDb', blogsSchema);

export default BlogsDb ;