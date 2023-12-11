import React,{useState,useEffect} from 'react'
import axios from 'axios'
const APP = () => {
    const[post,setPosts] = useState([])

    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then(res =>{
          console.log(res)
          setPosts(res.data)
       })
       .catch(error => {
          console.log(error)
       })
    },[])
    return(
        <div>
            {/* <h1>React Basics</h1> */}
            {
                post.map(Posts =>(<li key={Posts.id}>{Posts.name}{Posts.username}</li>
                ))
            }
        </div>
    )
}
export default APP