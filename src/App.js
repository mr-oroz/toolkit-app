import './App.css';
import {Routes, Route} from 'react-router-dom';
import Appbar from './components/appbar/appbar';
import Home from './pages/home/home';
import Cart from './pages/cart/cart';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
