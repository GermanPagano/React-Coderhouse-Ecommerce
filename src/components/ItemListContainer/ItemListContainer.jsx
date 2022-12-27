import { useEffect , useState }from "react";
import Item from "./Item";
import "./ItemlistStyles.css";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import CatchProductsOfMock from '../../services/mockService';



const ItemListContainer = () => {
  // estado para guardar los productos
  const [products, setProduct] = useState([]);
  // este mensaje me avisa cuando estamos intentando mostrar en la pantalla los productos
  console.log("%c Intentando renderizar ", "background-color: blue");
  // useEffect para ejecutar la funcion que ira a buscar los productos al mockService
  useEffect(() => {
    //llamo a a funcion 
      CatchProductsOfMock()
      // de ser exitosa la devolucion guardo lo recibido en el useState
      .then( response => setProduct(response))
      // de ser erronea la respuesta mostrar el error por consola
      .catch((e) => console.log(e));
    }, []);



  return (
    <MDBContainer fluid className=" container my-5 text-center ">
      <h5 className="mt-4 mb-5">
        <strong>All games</strong>
      </h5>
      <MDBRow>

        {products.map( element => {
        return (
          <Item
          key={element.id}
          imgUrl={element.imgUrl}
          text={element.text}
          title={element.title}
          category={element.category}
          price={element.price}
        ></Item>

        )}
      )}
      </MDBRow>
    </MDBContainer>
  );
};

export default ItemListContainer;
