import React, {  useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import "./stylesCart.css";
import { GrFormAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr";
import { IoTrash } from "react-icons/io5";

function Cart() {

  const context = useContext(cartContext);
  console.log(context);

  const handleClearCart = () => {
    context.Clear()
  }



const handleSubstractProduct = (item) => {
  console.log('queres borrar el  ' + item.title)

  context.RemoveToCart( item )
}


  return (
    <div className="container cart-page-container col-12 justify-content-center p-3">
      <div className="cart-page-header "> My cart </div>
      <div className="cart-page-body">
      <div className="btn-clear">

      <ButtonComponent
        text='Clear'
        handlerOnclick={handleClearCart}
        className='btn-clear'
      />
      </div>

        {context.cart.map((item) => (
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
              <ButtonComponent text={<GrFormAdd size={20}/>} />
              <ButtonComponent text={<GrFormSubtract size={20}/>} />
            </div>
            <div className="box-item">
              <p> {`${item.quantity} x $ ${item.price}`}</p>
            </div>
            <div className="box-item">
            <ButtonComponent 
            handlerOnclick={ ()=> handleSubstractProduct(item)}
            text={<IoTrash size={20} />} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
