import { useEffect, useState } from "react"


export default function FetchData(){

    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {

            if(!response.ok){
                throw new Error('Network response wasnt ok ')
            }

            return response.json()
        })
        .then((data) => {
            setPosts(data);
            setLoading(false);
        })
        .catch((e) => {
            console.error("Error fetching data : ",e)
        })
    },[])

    return <div>
        <h1>Posts</h1>
        {
            loading ? (
                <p>Loading...</p>
            ) : (
                <ul></ul>
            )
        }
    </div>
}