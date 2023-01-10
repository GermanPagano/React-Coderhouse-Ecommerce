import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchItem from "./components/SearchItem/SearchItem";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDeatailContainer from "./components/ItemListContainer/ItemDeatailContainer";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
    }
  };

  return (

      <BrowserRouter>
          <div className="App">
        <NavBar    />
        <SearchItem onKeyDown={handleSearch}></SearchItem>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />{/* ruta requerida para entrega 2 */}
          <Route path="/about" element={<h1>Soy el about</h1>} />
          <Route path="/category/:ItemConsole" element={<ItemListContainer />} />{/* ruta requerida para entrega 2 */}
          <Route path="/item/:itemid" element={<ItemDeatailContainer />} />{/* ruta requerida para entrega 2 */}
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
