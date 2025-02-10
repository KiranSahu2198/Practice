import { useEffect, useState } from "react";
import './Pagination.css';

const LIST_COUNT = 20;

export default function Pagination() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchData = async() => {
        const res = await fetch('https://dummyjson.com/users?limit=500');
        const list = await res.json();
        setData(list.users);
    }

    useEffect(() => {
        fetchData()
    },[]);

    const totalPages = Math.ceil(data.length/LIST_COUNT);
    const start = (currentPage-1)*LIST_COUNT;
    const end = start + LIST_COUNT;
    {console.log(Array(totalPages))}

    return(<>
    <div>
    {[...Array(totalPages).keys()].map(e => 
    <button key={e+1} 
    onClick={() => setCurrentPage(e+1)}
    active={true}
    >{e+1}</button>)}
    </div>
    <ol>
        {console.log(start, end)}
        {data.slice(start, end).map(e => <li key={e.id}>{e.email}</li>)}
    </ol>
        
    </>)
}