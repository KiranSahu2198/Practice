import Search from '../search/Search'
import Pagination from '../pagination/Pagination'
import FeatchDeleteItem from '../featchDeleteItem/featchDeleteItem'
import Header from '../header/header'
import { BrowserRouter as Router, Routes, Route } from 'react-router'

const Home = () => {
    return(<Router>
        <Header />
      <Routes>
        <Route path='*' element={<h2>Welcome to Practice</h2>} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Pagination' element={<Pagination />} />
        <Route path='/FeatchDeleteItem' element={<FeatchDeleteItem />} />
      </Routes>
    </Router>)
}
export default Home