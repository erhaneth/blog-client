import axios from "axios"
import { useState, useEffect } from "react"
export default function Blog() {
    //managin imput for the form
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [createBlog, setCb] = useState({})
    const [returnBlog, setBlog] = useState({})
    //create state for the form
    //create state for the blog itself
    //create state for comment
    //useEffect hook for do fetch/axios create call
    useEffect(()=>{
        //pass form state to dependency array for useEffect
        // if(createBlog){
            axios.post(`http://localhost:8000/blog`, createBlog)
            .then(response => {
				console.log(response.data)
				setBlog(response.data)
			})
			.catch(console.warn)
        // }

    },[createBlog])

    //pass form state object to axios call -- use axios.post
    
    

    //create axios call for the comment
    function onSubmit(){
        setCb(
            {title: title, body: body}
        )
        setTitle('')
        setBody('')

    } 
    console.log(createBlog);
    
    return (
		<div>
			<h1>blog</h1>
		 <form>
            <label>title:
                <input 
                type="text" 
                value={title} 
                onChange={e=>{setTitle(e.target.value) }}
                />

            </label>
            <label>body:
                <input 
                type="text" 
                value={body} 
                onChange={e=>{setBody(e.target.value) }}
                />

            </label>
            <button
            type="button"

            onClick={onSubmit}
            >Post</button>

         </form>
         <div>
            { returnBlog.title && <h1>{returnBlog.title}</h1>}
         </div>
		</div>
	)

}