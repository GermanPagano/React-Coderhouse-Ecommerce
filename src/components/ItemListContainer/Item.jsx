import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import { FiHeart } from 'react-icons/fi'
import { FiShoppingCart } from "react-icons/fi";

const Item = ( { imgUrl,text,title,category,price }) => {
  return (
      <MDBCol md="12" lg="3" className="mb-4">
        <MDBCard>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image  hover-zoom"
          >
            <MDBCardImage
              src={imgUrl}
              fluid
              className="w-100"
            />              
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end ">
                <h4> 
                    <span className="badge ms-2 mt-2">{text}</span>
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
          <MDBCardBody >
              <h5 className="card-title mb-3 ">{title}</h5>
            <a href="#!" className="text-reset">
              <p>{category}</p>
            </a>
            <h6 className="mb-3">{price}</h6>
            <button className="btn " ><FiShoppingCart size={17} /></button>
            <button className="btn " ><FiHeart size={17} /></button>
            <button className="btn" > View more</button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

  );
};

export default Item;
