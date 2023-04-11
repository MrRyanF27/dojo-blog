import { Link } from "react-router-dom";
const Bloglist = ({b,t}) => {
//     const blog = props.b;
//    const t = props.t;

    return ( 
        <div className="blog-list">
            <h2>{t}</h2>
             { 
                b.map((blogs)=>( 
                    <div className="blog-preview" key={blogs.id}>
                        <Link to={`/blogs/${blogs.id}`}>
                            <h2> {blogs.title}</h2>
                            <p>Written by {blogs.author} </p>
                            
                        </Link>

                       
                    </div>
                ))
           }
            
        </div>
     );
}
 
export default Bloglist;