import { useEffect, useState } from 'react';


function ApiReqDemo() {

    console.log("apireq demo componnet")

    let [posts, setPosts] = useState([])
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null)

    async function getPosts() {
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            let data = await res.json();
            setPosts(data);
            setLoading(false)
        } catch (err) {
            setError(err)
            setLoading(false)
        }
    }

    //getPosts() function will be called only after initial rendering of this component
    useEffect(() => {
        getPosts()
    }, [])

    //dealing with loading state
    if (loading === true) {
        return <div class="spinner-border display-1 mt-5" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }

    //delaing with error state
    if (error !== null) {
        return <h2 className='text-danger mt-5'>{error.message}</h2>
    }


    return (
        <div className='container mt-5'>
            <h1>API data</h1>
            {/* display posts as Table */}
            <table className='table '>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(postObj => <tr key={postObj.id}>
                            <td>{postObj.userId}</td>
                            <td>{postObj.id}</td>
                            <td>{postObj.title}</td>
                            <td>{postObj.body}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ApiReqDemo;



