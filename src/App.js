import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';

import Dashboard from './components/Dashboard';
import NFT from './components/NFT';
import Earn from './components/Earn';
import Buy from './components/Buy';
import Referals from './components/Referals';
import Ecosystem from './components/Ecosystem';
import About from './components/About';
// import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}></Route>

        {/* <Route path='/navbar' element={<Navbar/>}></Route> */}

        
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/nft' element={<NFT/>}></Route>
        <Route path='/earn' element={<Earn/>}></Route>
        <Route path='/buy' element={<Buy/>}></Route>
        <Route path='/referals' element={<Referals/>}></Route>
        <Route path='/ecosystem' element={<Ecosystem/>}></Route>
        <Route path='/about' element={<About/>}></Route>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
