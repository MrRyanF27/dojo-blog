import { Link } from "react-router-dom";

const NotFound = () => {


    return ( 
        <div className="Not-Found">
            <h1>Sorry BebeBoi</h1>
            <p>This page cannot Found</p>

            <Link to='/'>
                Back to Homepage
            </Link>
        </div>
     );
}
 
export default NotFound;