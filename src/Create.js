import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [author,setAuthor] = useState("")

    const [success,isSuccess] = useState(false)
    const [pending,isPending] = useState(false)

    const history = useHistory()

    const handleSubmit = (e)=>{

        isPending(true)

        e.preventDefault();
        const blog = {title,body,author}
        console.log(blog)

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{ 
            console.log("New Blog Added!")
            isSuccess(true)
            isPending(false)

            // history.go(-1)
            history.push('/')
        })
       
    }

    return ( 
        <div className="Create">
            <h2>Create new Blog</h2>
            {success && <p>Blog Added successfully!</p>  }

            <form onSubmit={handleSubmit}>

                <label>Blog Title</label>
                <input 
                     type="text"
                     required
                     value={title}
                     onChange={ (e)=> setTitle(e.target.value) }
                 />

                 <label>Blog Body</label>
                 <textarea 
                    required
                    value={body}
                    onChange={ (b)=> setBody(b.target.value) }
                 >  
                 </textarea>

                 <label >Author</label>
                 <select value={author} onChange={(a)=>setAuthor(a.target.value)}>
                    <option value="Mr.Ryan Ferriol">Mr.Ryan Ferriol</option>
                    <option value="Mr. Swabeh">Mr. Swabeh</option>
                 </select>

                 {!pending && <button >ADD BLOG</button>}
                 {pending && <button disabled>ADD BLOG...</button>}

                 <h3>{title}</h3>
                 <p>{body}</p>
                 {author && <p>Author is {author}</p>}

                 

            </form>
        
           
        
        </div>

     );
}
 
export default Create;