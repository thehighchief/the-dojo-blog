
import BlogList from "../layouts/BlogList";
import useFetch from "../CustomHooks/useFetch";

const Home = () => {
    const {data: blogs, error, isLoading} = useFetch('http://localhost:3000/blogs')

    return (
        <div className="home-blog-display">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} mainTitle={'All Blogs'}/>}
            
        </div>
        
        
    );
}
 
export default Home