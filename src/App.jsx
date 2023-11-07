
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/nav-bar.component";
import ItemListContainer from "./components/item-list-container";
import ItemDetailContainer from './components/item-detail.component';

import Home from './components/home.component';
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/productos" element={<ItemListContainer/>} />
          <Route path="/producto/:productoId" element={<ItemDetailContainer/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;
