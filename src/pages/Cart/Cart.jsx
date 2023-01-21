import React, { useContext, useState } from "react";
import { cartContext } from "../../storage/cartContext";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import "./stylesCart.css";
import { GrFormAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr";
import { IoTrash } from "react-icons/io5";
import { Link } from "react-router-dom";

function Cart() {
  const context = useContext(cartContext);

  const handleClearCart = () => {
    context.Clear();
  };
  const handleSubstractProduct = (item) => {
    context.RemoveToCart(item);
  };

  // tengo que mejorar esta logica./////////////////////
  const [stock, setStock] = useState(context.cart.length);
  const handleAddOne = (item) => {
    setStock(stock + 1);
    context.AddToCart({ ...item, quantity: 1 });
  };
  const handleRestOne = (item) => {
    item.quantity === 1 && context.RemoveToCart(item);
    setStock(stock - 1);
    context.AddToCart({ ...item, quantity: -1 });
  };
  //////////////////////////////



  return (
    <div className="container cart-page-container col-12 justify-content-center p-3">
      <div className="cart-page-header "> My cart </div>

      <div className="cart-page-body">
        {context.cart.length === 0 ? (
          <div className="col ">
            <div className=" d-flex p-3 justify-content-center">
              <h3>No items added</h3>
            </div>

            <div className="d-flex justify-content-center">
              <Link to="/">
                <ButtonComponent text="Back to Home" />
              </Link>
            </div>
          </div>
        ) : (
          context.cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="box-item">
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="cart-items-img"
                />
              </div>
              <div className="box-item">
                {" "}
                <h5>{item.title}</h5>{" "}
              </div>
              <div className="box-item ">
                <ButtonComponent
                  handlerOnclick={() => handleAddOne(item)}
                  text={<GrFormAdd size={20} />}
                />

                <ButtonComponent
                  handlerOnclick={() => handleRestOne(item)}
                  text={<GrFormSubtract size={20} />}
                />
              </div>
              <div className="box-item">
                <p> {`${item.quantity} x $ ${item.price}`}</p>
              </div>
              <div
                className="box-item"
                style={{ justifyContent: "center", display: "flex" }}
              >
                <ButtonComponent
                  handlerOnclick={() => handleSubstractProduct(item)}
                  text={<IoTrash size={20} />}
                />
              </div>
            </div>
          )
          )
        )
        }
      </div>
      {context.cart.length !== 0 &&
      <div className="container text-center mt-3 p-3" style={{color:'white'}}>
      <h5 >Total: $ { context.getTotalPrice() }</h5>

      <div>
          <ButtonComponent
            text="Remove all"
            handlerOnclick={handleClearCart}
            className="btn-clear"
          />
          <ButtonComponent
            text="Buy cart"
            handlerOnclick={handleClearCart}
            className="btn-clear"
          />
        </div>

      </div>
      }
    </div>
  );
}

export default Cart;
