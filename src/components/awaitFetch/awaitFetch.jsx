import { useEffect, useState } from "react"

function AwaitFetch(){
    const [users, setUsers] = useState([]);
    const fetchData = async () => {
        const datalist = await fetch('https://dummyjson.com/users');
        const data = await datalist.json();
        console.log(data);
        
        setUsers(data.users);
    }
    const deleteHandel = (id) => {
        const updatedList = users.filter(user => user.id !== id);
        setUsers(updatedList);
    }
    
    useEffect(() =>{
        fetchData();
    }, [])

    return(<>
        <h2>Users</h2>
        {users.map(user => <p key={user.id} onClick={() => deleteHandel(user.id)}>{user.firstName}</p>)}
    </>)
}
export default AwaitFetch