import { Link } from "react-router"

const Header = () => {
    return(
        <>
            <header>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/Search'>Search</Link>
                    <Link to='/Pagination'>Pagination</Link>
                    <Link to='/FeatchDeleteItem'>Featch & Delete</Link>
                    <Link to='/Counter'>Counter</Link>
                </nav>
            </header>
        </>
    )
}
export default Header