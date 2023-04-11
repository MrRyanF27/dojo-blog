
import Bloglist from './BlogList';
import useFetch from './useFetch';


const Home = () => {

  const {data:blog,pending,error} = useFetch('http://localhost:8000/blogs')

  
    return ( 
        <div className="home">
          {error && <div>Cannot Fetch kase may Error Baybeh!</div>}
          {pending && <div>Loading...</div>}
          {blog &&  <Bloglist b={blog} t="Title nya kunware"  />}
          
          
          
        </div>
     );
}
 
export default Home;