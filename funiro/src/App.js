import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Summary from './pages/summary/Summary';
import SearchImage from './pages/searchImage/SearchImage';

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
