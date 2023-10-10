import NavBar from "./components/nav-bar.component";
import ItemListContainer from "./components/item-list-container";
import "./App.scss";

const App = () => {
  const message = "Bienvenido a nuestra tienda en línea";

  return (
    <div className="App">
      <NavBar className="header" />
      <ItemListContainer message={message} className="section" />
    </div>
  );
};

export default App;
