import './App.css';
import { Route, Routes } from 'react-router-dom';


import Home from './components/Home/Home';
// import Fav from './components/FavList/FavList';
// import  Navbar  from './components/navbar/Navbar';

function App() {
  return (
    <div>
       {/* <Navbar/> */}
      <Routes>
          <Route path='/' exact  element={<Home/>} />
          {/* <Route path='/favorite' exact element={<Fav/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
