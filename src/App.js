import './App.css';
import NavBar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer';
import SearchItem from './components/SearchItem/SearchItem';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App" >

      <NavBar></NavBar>
      <SearchItem></SearchItem>
      {/* <ButtonsContainer></ButtonsContainer> */}
      <ItemListContainer></ItemListContainer>

    </div>
  );
}

export default App;
