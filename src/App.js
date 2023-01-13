import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchItem from "./components/SearchItem/SearchItem";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDeatailContainer from "./components/ItemDetailContainer/ItemDeatailContainer";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";

function App() {

  return (

      <BrowserRouter>
          <div className="App">
          <NavBar />
        <SearchItem ></SearchItem>
        <Routes>
          <Route path="/" exact element={<HomePage />} />{/* ruta requerida para entrega 2 */}
          <Route path="/about" element={<h1>About proximamente en constuccion</h1>} />
          <Route path="/item/name/:ItemName" element={<ItemListContainer/>}/>
          <Route path="/category/:ItemConsole" element={<ItemListContainer />}/>{/* ruta requerida para entrega 2 */}
          <Route path="/item/:itemid" element={<ItemDeatailContainer />} />{/* ruta requerida para entrega 2 */}
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        <Footer/>
        </div> 
      </BrowserRouter>

  );
}

export default App;
