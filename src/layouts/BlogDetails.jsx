import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../CustomHooks/useFetch";

const BlogDetails = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const { data: blog, error, isLoading } = useFetch('http://localhost:3000/blogs/' + id)

    const handleDelete = () => {
        fetch('http://localhost:3000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()  => {
            // the useNavigate method is called to tyake the user to the homepage after deleting the said blog instead of remainig on the page
            navigate('/')
        })
    }
    return (
        

        <div className="blog-details">
            {error && <div>{error}</div>}
            {isLoading && <h2 className="loading">Loading...</h2>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete} className="delete-btn">Delete</button>
                </article>
            )}

        </div>
    );
}
 
export default BlogDetails;