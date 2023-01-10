import { getProduct } from "../../services/mockService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer-Styeles.css";
import BtnAddToCart from "../Btn-Add-To-Cart/Btn-Add-To-Cart";

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

  }, [ ]); 


  const [stock, setstock] = useState(1);

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
          {`stock total ${detail.stock}`}
          <div className="add-rest-cant">
            <button disabled={stock === 0 } onClick={()=>setstock(stock -1 )}>-</button>
            
            { stock }
            <button disabled={stock === detail.stock} onClick={()=>setstock(stock+1)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemDeatailContainer;
