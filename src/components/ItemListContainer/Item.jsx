import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../../services/mockService";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
// import { FiHeart } from 'react-icons/fi'
import "./ItemlistStyles.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const Item = ({ Info_for_item }) => {
  const [stock, setStock] = useState(Info_for_item.stock);

  const handlerAddToCart = () => {
    setStock( prevStock => prevStock -1);
  };



  return (
    <MDBCol md="12" lg="3" className="mb-4">
      <MDBCard className="box-behind">
        <b></b>
        <div className="content">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image  hover-zoom"
          >
            <MDBCardImage
              src={Info_for_item.imgUrl}
              fluid
              className="img-item "
            />
            <div className="mask">
              <div className="d-flex justify-content-start align-items-end ">
                <h4>
                  <span className="badge ms-4 mt-2">
                    {Info_for_item.console}
                  </span>
                </h4>
              </div>
            </div>
            <div className="hover-overlay">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </div>
          </MDBRipple>
          <MDBCardBody className="card-body">
            <h5 className="card-title mb-3 ">{Info_for_item.title}</h5>
            <p>{Info_for_item.category}</p>
            <h6 className="item-price mb-3">$ {Info_for_item.price}</h6>

            {/* <button className="btn" ><FiHeart size={17} /></button> */}
            <p>Available: {stock}</p>

            <ButtonComponent
              handlerOnclick={() => handlerAddToCart(Info_for_item)}
              text={"Add to cart"}
              onDisabler={ stock === 0 }
            />

            <Link to={`/item/${Info_for_item.id}`}>
              <ButtonComponent
                onClick={() => getProduct(Info_for_item.id)}
                text={"View more"}
              />
            </Link>
          </MDBCardBody>
        </div>
      </MDBCard>
    </MDBCol>
  );
};

export default Item;
