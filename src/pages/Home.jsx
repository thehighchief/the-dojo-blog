
import BlogDetails from "../layouts/BlogDetails";
import useFetch from "../CustomHooks/useFetch";

const Home = () => {
    const {data: blogs, error, isLoading} = useFetch('http://localhost:3000/blogs')

    return (
        <div className="home-blog-display">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogDetails blogs={blogs} mainTitle={'All Blogs'}/>}
        </div>
        
        
    );
}
 
export default Home