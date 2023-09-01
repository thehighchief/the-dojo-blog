import { Link } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns'


const BlogList = ({blog: { title, createdAt, aurthor, _id}}) => {

    return (
        <div className="bloglist-cover">

            <Link to={`/api/blogs/${_id}`} className="bloglist-preview">
                <h1>{ title }</h1>
                <p>{ aurthor }</p>
                <p>{ formatDistanceToNow( new Date(createdAt), {addSuffix: true}) }</p>
            </Link>
        </div>

        
      );
}
 
export default BlogList;