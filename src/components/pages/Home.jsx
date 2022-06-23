import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Home() {
    const [blogs, setBlogs] = useState()
	useEffect(() => {
		const fetchBlogs = async() =>{
			try {
				const res = await axios.get(`http://localhost:8000`)
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
		{/* {blogs} */}
		</div>
	)

}