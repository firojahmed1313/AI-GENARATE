import { Route, Routes } from 'react-router-dom';
import './App.css';
import Summary from './pages/summary/Summary';
import SearchImage from './pages/searchImage/SearchImage';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/summary' element={<Summary/>}></Route>
        <Route path='/imageSearch' element={<SearchImage/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
