import express from 'express';
import { 
    getAllBlogs,
    getOneBlog,
    createBlog,
    updateBlog,
    deleteBlog
 } from '../controllers/BlogsController.js';

const route = express.Router();


route.get('/',getAllBlogs);

route.get('/:id', getOneBlog);

route.post('/', createBlog);

route.patch('/:id', updateBlog);

route.delete('/:id', deleteBlog);


export default route 