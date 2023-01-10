import { useEffect , useState }from "react";
import Item from "./Item";
import "./ItemlistStyles.css";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import CatchProductsOfMock, { getProductCategory } from '../../services/mockService';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  // estado para guardar los productos
  const [products, setProduct] = useState([]);
  // utilizo el useParams para poder tomar el valor de la url que necesito filtrar como categoria
  let ItemConsole = useParams().ItemConsole;
  console.log(`la categoria elegida a mostrar es ${ItemConsole}`)

  // useEffect para ejecutar la funcion que ira a buscar los productos al mockService
  useEffect(() => {
    ItemConsole ? (
        //llamo a a funcion 
        getProductCategory(ItemConsole)
        // de ser exitosa la devolucion guardo lo recibido en el useState
        .then( response => setProduct(response))
        // de ser erronea la respuesta mostrar el error por consola
        .catch((e) => console.log(e))
    ):(
    //llamo a a funcion 
      CatchProductsOfMock()
      // de ser exitosa la devolucion guardo lo recibido en el useState
      .then( response => setProduct(response))
      // de ser erronea la respuesta mostrar el error por consola
      .catch((e) => console.log(e)))
    
    }, [ItemConsole]);
    

    const handleAddtoCart = (allItems) => {
      const product_selected = products.find( (element) => element.id === allItems.id )
      product_selected ?
      setProduct(
  
        products.map((item)=> item.id === allItems.id ?
        {...product_selected, stock: product_selected.stock -1 }
        : item)
  
        
      )
      : console.log('')
  
      }




  return (
    <MDBContainer fluid className=" container my-5 text-center ">
      <MDBRow>
        {products.map( element => {
          const stockVerifier=  element.stock <1 ? ('not available') :( element.stock)
        return (

          <Item
          allItems = {element}
          key={element.id}
          imgUrl={element.imgUrl}
          console={element.console}
          title={element.title}
          category={element.category}
          price={element.price}
          id={element.id}
          stockInitial={stockVerifier}
          handleAddtoCart={handleAddtoCart}
        ></Item>

        )}
      )}
      
      </MDBRow>
    </MDBContainer>
  );
};
export default ItemListContainer

