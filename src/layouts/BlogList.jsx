import { Link } from "react-router-dom";

const BlogList = ({blogs, mainTitle}) => {

    return (
        <div className="blog-list">
            <h1>{mainTitle}</h1>
            {blogs.map((blog) => (
            <div className="bloglist-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`} className="homeblog-main">
                    <h1>{blog.title}</h1>
                    <p>Written By {blog.author}</p>
                </Link>
            </div>
        ))}
        </div>
      );
}
 
export default BlogList;