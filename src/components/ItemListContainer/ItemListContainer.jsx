import { useEffect, useState } from "react";
import "./ItemlistStyles.css";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import CatchProductsOfMock, {
  getProductCategory,
 //getProductByName,
} from "../../services/mockService";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  // estado para guardar los productos
  const [products, setProduct] = useState([]);

  // utilizo el useParams para poder tomar el valor de la url que necesito filtrar como categoria
  let ItemConsole = useParams().ItemConsole;

  // useEffect para ejecutar la funcion que ira a buscar los productos al mockService
  useEffect(() => {
    ItemConsole
      ? //llamo a a funcion
        getProductCategory(ItemConsole)
          // de ser exitosa la devolucion guardo lo recibido en el useState
          .then((response) => setProduct(response))
          // de ser erronea la respuesta mostrar el error por consola
          .catch((e) => console.log(e))
      : //llamo a a funcion
        CatchProductsOfMock()
          // de ser exitosa la devolucion guardo lo recibido en el useState
          .then((response) => setProduct(response))
          // de ser erronea la respuesta mostrar el error por consola
          .catch((e) => console.log(e));
  }, [ItemConsole]);

  const handleAddtoCart = (allItems) => {
    const product_selected = products.find(
      (element) => element.id === allItems.id
    );
    product_selected
      ? setProduct(
          products.map((item) =>
            item.id === allItems.id
              ? { ...product_selected, stock: product_selected.stock - 1 }
              : item
          )
        )
      : console.log("");
  };

  return (
    <MDBContainer fluid className=" container my-5 text-center ">
      <MDBRow>

      <ItemList
        products={products}
        handleAddtoCart={handleAddtoCart}
      />

      </MDBRow>
    </MDBContainer>
  );
};
export default ItemListContainer;