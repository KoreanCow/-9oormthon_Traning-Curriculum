import { Route, Routes } from 'react-router-dom';
import './App.css';
import TestingComponent from './components/TestingComponent';
import HeaderComponents from './components/HeaderComponents';
import CartPageComponent from './components/CartPageComponent';

function App() {
  return (
    <div>
      <HeaderComponents />
      <Routes>
        <Route path='/' element={<TestingComponent />} />
        <Route path='/cart' element={<CartPageComponent />} />
      </Routes>
    </div>
  );
}

export default App;
