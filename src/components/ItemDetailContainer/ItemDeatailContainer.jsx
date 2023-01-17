import { getProduct } from "../../services/mockService.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./StylesItemDetailContainer.css";
import ItemCount from "./ItemCount.jsx";


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
            <span className="price">$ {detail.price}</span>
            <span className="stock">{`Stock: ${ detail.stock}`}</span>
                      
          </div>
          <div className="box-description">
          <p>{detail.description}</p>
          </div>
          <span className="line-divider"></span>
          <ItemCount detail={detail}/>
        </div>
      </div>
    </div>
  );
}
export default ItemDeatailContainer;
