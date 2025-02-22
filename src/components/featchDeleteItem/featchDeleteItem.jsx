import {useState, useEffect} from 'react'
import Posts from './Posts'

function FeatchDeleteItem() {
    const [posts, setPosts] = useState([])
    const fetchData = () => fetch('https://jsonplaceholder.typicode.com/posts')
        .then((respose) => respose.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error(error))
  
    useEffect(() => {
      fetchData();
    }, [])
  
    const deleteItem = (e) => {
      let modifiedData = posts.filter((item) => item.id !== e.id)
      setPosts(modifiedData)
    }
  
    return (
      <ul>
        <Posts posts={posts} deleteItem={deleteItem} />
      </ul>
    )
  }
  
  export default FeatchDeleteItem