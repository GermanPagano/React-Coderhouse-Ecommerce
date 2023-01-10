import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { MDBBadge } from "mdb-react-ui-kit";

const CartWidget = (props) => {
  return (
    <div className="justify-content-center" >

      <FiShoppingCart className="m-2" size={18}></FiShoppingCart>

        <MDBBadge pill color="danger"  className="badge rounded-pill badge-notification bg-danger flex-end ">
        {props.text}
      </MDBBadge>
    </div>

  );
};

export default CartWidget;
