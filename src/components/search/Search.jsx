import { useState, useEffect, Suspense } from 'react'
import './Search.css'

function Search() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cache, setCache] = useState({});
  localStorage.setItem("locStorage", JSON.stringify(cache));

  const fetchData = async () => {
    const localCache = JSON.parse(localStorage.getItem("locStorage"));
    console.log('ggg', localCache);
    
    if(localCache[text]){
      setData(localCache[text]);
      // setData(cache[text]);
      console.log('cached');
      return;
    }
    try{
      const response = await fetch('https://dummyjson.com/users/search?q=' + text);
      const users = await response.json();
      setData(users?.users);
      setCache((prev) => ({...prev, [text]: users?.users}));
      localStorage.setItem("locStorage", JSON.stringify(cache));
    }
    catch(error){
      console.error('error', error);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
      console.log('render');
    }, 2500);
    
    return () => {
      clearTimeout(timer);
    }
  }, [text])

  return (
    <>
      <input 
      className='searchBox' 
      type='text' 
      onChange={(e) => setText(e.target.value)} 
      onFocus={() => setShowSearch(true)}
      // onBlur={() => setShowSearch(false)}
       />
      {(showSearch) && (<div className='searchContainer'>
        <Suspense fallback={<h3> Loading ... </h3>}>
          {data.length > 0 ? data.map(e => <span key={e.id} onClick={() => {setText(e.firstName); console.log(text)}} >{e.firstName + " " + e.lastName}</span>) : <span className="error">Data not found</span>}
        </Suspense>
      </div>)}
    </>
  )
}

export default Search
