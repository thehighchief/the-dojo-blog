const BlogDetails = ({blogs, mainTitle}) => {

    return (
        <div className="blogdetails-preview">
            <h1>{mainTitle}</h1>
            {blogs.map((blog) => (
            <div className="home-blog" key={blog.id}>
                <h1 className="homeblog-title">{blog.title}</h1>
                <p className="home-blog-author">Written By {blog.author}</p>
            </div>
        ))}
        </div>
      );
}
 
export default BlogDetails;