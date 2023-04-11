import { useState,useEffect } from "react";

const useFetch = (url) => {

    const [data,setData] = useState( null);
    const [pending,isPending] = useState(true)
    const [error,isError] = useState(null)

    
    useEffect( ()=>{  

      const abortCont = new AbortController();

        setTimeout(()=>{
     
          fetch(url, {signal:abortCont.signal})
           .then( (res)=>{ 
     
             if(!res.ok){
               throw Error('May Error!')
             }
            
             return res.json()
           } ).then( (data)=>{ 
             setData(data)
             isPending(false)
             isError(null)
             
     
           } ).catch((err)=>{

            if(err.name === "AbortError"){
              console.log("Fetch Abortedd")
            }else{
              console.log(err.message)
              isError(err.message)
              isPending(false)
            }

             
             
           })
     
        },1000)

        return ()=> abortCont.abort()
           
     
       },[url] )


       return {data,pending,error}
     
}
 
export default useFetch;