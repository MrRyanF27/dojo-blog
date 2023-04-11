import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    
    const {id} = useParams()
    const history = useHistory()
   
    const {data:blogs,pending,error} = useFetch('http://localhost:8000/blogs/'+id)

    const handleDelete = ()=>{
        fetch('http://localhost:8000/blogs/'+id, {
          method: 'DELETE'
        }).then( ()=>{
          history.push('/')
        } )
    }

    return ( 
        <div className="blog-details">
            
            {error && <p>Errorrr</p> }
            {pending && <p>Loading...</p> }
          {blogs && <article>
            <h1>{blogs.title}</h1>
            <p>{blogs.author}</p>
            <div>{blogs.body}</div>
          </article> }

          <button onClick={ handleDelete}>Delete</button>

        </div>
     );
}
 
export default BlogDetails;