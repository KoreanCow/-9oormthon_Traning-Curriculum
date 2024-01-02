import { Outlet, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav';
import Fotter from './components/Fotter';

import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';

import './App.css';

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Fotter />
    </div>
  )
}

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path=':movieId' element={<DetailPage />} />
        <Route path='search' element={<SearchPage />} />

      </Route>
     </Routes>
    </div>
  );
}

export default App;
