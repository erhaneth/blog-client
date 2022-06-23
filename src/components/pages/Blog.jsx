import axios from "axios"
import { useState, useEffect } from "react"
export default function Blog() {

    // managing input for the form 
    //state variables
    //create state for the form
    //create state for the blog itself
    //create state for comment
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [createBlog, setCb] = useState({})
    const [returnBlog, setBlog] = useState({})
    const [comment, setComment] = useState({})
    
    //useEffect hook for do fetch/axios create call
    useEffect(() => {
        //pass form state to dependency array for useEffect
        if (createBlog) {
            axios.post(`${process.env.REACT_APP_SERVER_URL}/blog`, createBlog)
            .then(response => {
                console.log(response.data)
                setBlog(response.data)
            })
            .catch(console.warn)
        }
        
    }, [createBlog])
    
    //pass form state object to axios call -- use axios.post
    //create axios call for the comment
    useEffect(() => {
        //pass form state to dependency array for useEffect
        if (comment) {
            axios.post(`${process.env.REACT_APP_SERVER_URL}/blog`, comment)
            .then(response => {
                console.log(response.data)
                setComment(response.data)
            })
            .catch(console.warn)
        }
        
    }, [comment])



    function onSubmit() {
        setCb(
            { title: title, body: body }
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
                        onChange={e => { setTitle(e.target.value) }}
                    />

                </label>
                <label>body:
                    <input
                        type="text"
                        value={body}
                        onChange={e => { setBody(e.target.value) }}
                    />

                </label>
                <button
                    type="button"

                    onClick={onSubmit}
                >Post</button>

            </form>
            <div>
                {returnBlog.body && <h1>{returnBlog.title}</h1>}
            </div>
        </div>
    )

}