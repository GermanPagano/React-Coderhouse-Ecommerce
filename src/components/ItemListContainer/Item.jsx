import React from "react";
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
import BtnAddToCart from "../Btn-Add-To-Cart/Btn-Add-To-Cart";
const Item = ({
  imgUrl,
  console,
  title,
  category,
  price,
  id,
  stockInitial,
  allItems,
  handleAddtoCart,
}) => {
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
          <MDBCardImage src={imgUrl} fluid className="img-item " />
          <div className="mask">
            <div className="d-flex justify-content-start align-items-end ">
              <h4>
                <span className="badge ms-4 mt-2">{console}</span>
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
          <h5 className="card-title mb-3 ">{title}</h5>
          <p>{category}</p>
          <h6 className="item-price mb-3" >
            $ {price}
          </h6>

          {/* <button className="btn" ><FiHeart size={17} /></button>      */}
          <p>Available: {stockInitial}</p>
          <BtnAddToCart
            stockInitial={ stockInitial }
            allItems={ allItems }
            handleAddtoCart={ handleAddtoCart }
          />

          <Link to={`/item/${id}`}>
            <button className="btn btn-secondary btn-card" onClick={() => getProduct(id)}>
              View more
            </button>
          </Link>
        </MDBCardBody>

        </div>
      </MDBCard>
    </MDBCol>
  );
};

export default Item;
