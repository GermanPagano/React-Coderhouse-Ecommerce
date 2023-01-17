import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchItem from "./components/SearchItem/SearchItem";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDeatailContainer from "./components/ItemDetailContainer/ItemDeatailContainer";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import NavbarComp from './components/Navbar/NavbarComp';
import { CartProvider } from "./storage/cartContext";

function App() {

  return (
 
<div className="App">
    <CartProvider> 
      <BrowserRouter>
          <NavbarComp/>
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
      </BrowserRouter>
     </CartProvider> 
</div>

  );
}

export default App;
