import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Summary from './pages/Summary';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/summary' element={<Summary/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
