import './App.css';
import NavBar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import SearchItem from './components/SearchItem/SearchItem';


function App() {
  return (
    <div className="App">

      <NavBar></NavBar>
      <SearchItem></SearchItem>
      <ItemListContainer greeting='Hola¡ soy el greeting'></ItemListContainer>

    </div>
  );
}

export default App;
