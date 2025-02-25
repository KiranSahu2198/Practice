import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Search from '../search/Search'
import Pagination from '../pagination/Pagination'
import FeatchDeleteItem from '../featchDeleteItem/featchDeleteItem'
import Header from '../header/header'
import Counter from '../counter/counter'

const Home = () => {
    return(<Router>
        <Header />
      <Routes>
        <Route path='*' element={<h2>Welcome to Practice</h2>} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Pagination' element={<Pagination />} />
        <Route path='/FeatchDeleteItem' element={<FeatchDeleteItem />} />
        <Route path='/Counter' element={<Counter />} />
      </Routes>
    </Router>)
}
export default Home