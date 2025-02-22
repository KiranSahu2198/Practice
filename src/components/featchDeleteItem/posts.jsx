export default function Posts({posts, deleteItem}) {
    let postCards = posts?.map((e) => (
      <li key={e.id}>
        {e.title}
        <button onClick={() => deleteItem(e)}>delete</button>
      </li>
    ))
  
    return <>{postCards}</>
  }
  