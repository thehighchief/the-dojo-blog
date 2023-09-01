import loader from '../images/loader.svg'
import BlogList from "../layouts/BlogList";
import { useGetAllBlogsQuery } from "../slices/BlogApiSlice";

const Home = () => {
    

    const {data: blogs, isLoading, error } = useGetAllBlogsQuery();
    

    return (
        <div className="home-blog-display">

            <h1>All Blogs</h1>

           {isLoading ? (
            <img src={loader} alt="loading" />
           ) : error ? (
            <div>{error?.data?.error || error.error}</div>
           ) : (
            <div>{blogs && blogs.map((blog) => (
                
                <BlogList blog={blog} key={blog._id} />
            
            ))}</div>
           )} 
            
        </div>
        
        
    );
}
 
export default Home