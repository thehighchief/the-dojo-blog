import { useParams } from "react-router-dom";
import useFetch from "../CustomHooks/useFetch";

const BlogDetails = () => {

    const {id} = useParams();

    const { data: blog, error, isLoading } = useFetch('http://localhost:3000/blogs/' + id)

    return (
        

        <div className="blog-details">
            {error && <div>{error}</div>}
            {isLoading && <h2 className="loading">Loading...</h2>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button  className="delete-btn">Delete</button>
                </article>
            )}

        </div>
    );
}
 
export default BlogDetails;