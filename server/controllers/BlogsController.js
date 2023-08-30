import BlogsDb from "../model/BlogsModel.js";
import mongoose from "mongoose";


// get all Blogs

const getAllBlogs = async ( req, res ) => {
    
    const Blogs = await BlogsDb.find({}).sort({createdAt: -1})
    res.status(200).json(Blogs)
}

// get a single blog

const getOneBlog = async ( req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such blog found'})
    }

    const Blogs = await BlogsDb.findById(id)

    if(!Blogs) {
        return res.status(404).json({error: 'blog does not exist'})
    }

    res.status(200).json(Blogs)

}

// create new blog

const createBlog = async ( req, res ) => {
    const { title, body, aurthor } = req.body

    let emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }

    if(!body) {
        emptyFields.push('body')
    }

    if(!aurthor) {
        emptyFields.push('aurthor')
    }

    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all entries', emptyFields})
    }
    

    try {
        const Blogs = await BlogsDb.create({ title, body, aurthor })
        res.status(200).json(Blogs)
    } catch (error) {
        res.status(400).json({error: 'workout could not create'})
    }
}

// update blog

const updateBlog = async ( req, res ) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'try again,could not create blog'})
    }

    const Blogs = await BlogsDb.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if(!Blogs) {
        return res.status(200).json({error: 'could not update'})
    }

    res.status(200).json(Blogs)

}

// delete blog

const deleteBlog = async ( req, res ) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'could not find blog to delete'})
    }

    const Blogs = await BlogsDb.findOneAndDelete({ _id: id })

    if(!Blogs) {
        return res.status(400).json({error: 'could not find blog to delete'})
    }

    res.status(200).json(Blogs)
}


export {
    getAllBlogs,
    getOneBlog,
    createBlog,
    updateBlog,
    deleteBlog
}