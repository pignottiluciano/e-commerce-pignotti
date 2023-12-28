import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Home from "./components/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomProvider from "./context/CartContext";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <CustomProvider>
          <NavBar />
          <section className="section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route
                path="/productos/:idCategory"
                element={<ItemListContainer />}
              />
              <Route
                path="/item/:idProduct"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </section>

          <Footer className="footer" />
        </CustomProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
