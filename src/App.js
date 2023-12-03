import { useEffect, useState } from 'react';
import './Product.css'
import Cards from './Cards';
import axios from 'axios';
import Pagination from './Pagination';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.err('Error fetching data: ', err);
      });
  }, []);

  const lastIndexItem = currentPage * postPerPage;
  const firstIndexItem = lastIndexItem - postPerPage;
  const paginatedData = data.slice(firstIndexItem, lastIndexItem);

  const searchProduct = paginatedData.filter(product => product.name.toLowerCase().trim()
    .includes(search.toLowerCase().trim()));

  return (
    <div className="App">
      <Cards data={paginatedData} search={search} searchProduct={searchProduct} setSearch={setSearch} />
      <Pagination data={data.length} postPerPage={postPerPage} setcurrentPage={setcurrentPage} /> <br />
      <select className='selectPage' name="postPerPage" id=""
        onChange={(e) => {
          setPostPerPage((e.target.value));
        }}>
        <option value="8">8</option>
        <option value="10">10</option>
        <option value="12">12</option>
      </select>
    </div>
  );
}

export default App;
