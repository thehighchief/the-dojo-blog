import { useNavigate, useParams } from "react-router-dom";
import { useGetOneBlogQuery, useDeleteBlogMutation } from "../slices/BlogApiSlice";
import loader from '../images/loader.svg'

const BlogDetails = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const { data: blog, isLoading, error } = useGetOneBlogQuery(id);

    const [deleteBlog, {isLoading:loading}] = useDeleteBlogMutation();

    const handleDelete = async (id) => {
    
        await deleteBlog(id);
        navigate('/');
       
    };


    return (
        

        <div className="blog-details">
            
            { isLoading ? (
                <img src={loader} alt="loading" />
            ) : error ? (
                <div>{ error?.data?.error || error.error }</div>
            ) : (
                <div>{blog && (
                    <article key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.aurthor}</p>
                        <div>{blog.body}</div>
                        <button onClick={()=>handleDelete(id)} className="delete-btn" disabled={loading}>Delete</button>
                        {loading && <div className="delete">Deleting....</div>}
                    </article>
                )}</div>
            )}

        </div>
    );
}
 
export default BlogDetails;