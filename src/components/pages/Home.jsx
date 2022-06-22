import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Home() {
    const [blogs, setBlogs] = useState()
	useEffect(() => {
		const fetchBlogs = async() =>{
			try {
				const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blogs`)
				setBlogs(res.data)
				console.log(res.data);

			} catch(err) {
				console.log(err);
			}

		}
		fetchBlogs()
	}, [])
    return (
		<div>
			<h1>Home</h1>
		
		</div>
	)

}