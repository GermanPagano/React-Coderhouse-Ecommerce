import { getProduct } from "../../services/mockService.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./StylesItemDetailContainer.css";
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { GrFormAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr";



function ItemDeatailContainer() {


  const notFound = {
    imgUrl:
      "https://www.zeldadungeon.net/wp-content/uploads/2013/10/error3.jpg",
    title: "No existe ese producto",
  }

  const [detail, setDetail] = useState([]);
  let params = useParams();

  useEffect(() => {
      getProduct(params.itemid)
    .then((resp) => setDetail(resp))
    .catch((err) => setDetail(notFound))
  }, [ ]);  // eslint-disable-line 







// estado para guardar la cantidad del producto elegido
  const [cantToBuy, setcantToBuy] = useState(0);
  const [disablerAddBtn, setDisablerAddBtn] = useState(false);
  const [disablerRestBtn, setdisablerRestBtn] = useState(false);
  

  const handleAddOne = () => {
    if( detail.stock >= 1 ) {
      setcantToBuy( cantToBuy + 1 )
      detail.stock = detail.stock -1

      disablerRestBtn  && ( setdisablerRestBtn( !disablerRestBtn ))
    }
    detail.stock < 1 && ( setDisablerAddBtn( !disablerAddBtn ))  
  }

  const handleRestOne = () => {
    if( cantToBuy >= 1 ){
      setcantToBuy( cantToBuy - 1 )
      detail.stock = detail.stock + 1

      disablerAddBtn  && ( setDisablerAddBtn( !disablerAddBtn ))
    }
    cantToBuy === 0 && ( setdisablerRestBtn( !disablerRestBtn ))
  }


  const handleAddToCart = (evt) => {
    alert( `Added: ${cantToBuy} of ${evt.title} to cart` )
  }

  return (
    <div className="detail-container container ">
      <div className="details">
        <div className="big-img">
          <img src={detail.imgUrl} alt={detail.title}></img>
        </div>
        <div className="box">
          <div className="row">
            <h2>{detail.title}</h2>
            <p>{detail.category}</p>
            <p>{detail.console}</p>
            <span>$ {detail.price}</span>
          </div>
          <div className="box-description">
          <p>{detail.description}</p>
          </div>
          {`stock total  ${ detail.stock}`}
          <div className="add-rest-cant">
            <ButtonComponent 
            onDisabler={ disablerRestBtn } 
            handlerOnclick={ handleRestOne }
            text={<GrFormSubtract/>}
            />
            { cantToBuy }
            <ButtonComponent 
            onDisabler={ disablerAddBtn } 
            handlerOnclick={ handleAddOne }
            text={<GrFormAdd/>}
            />
          </div>
          <div className="add-rest-cant">
          <ButtonComponent 
            onDisabler={false}
            handlerOnclick={ ()=> handleAddToCart(detail) }
            text={'Add to cart'}
            />
            </div>
        </div>
      </div>
    </div>
  );
}
export default ItemDeatailContainer;
