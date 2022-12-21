import React from 'react';
import { BsCartFill } from "react-icons/bs";

const CartWidget = (props) => {
    return (
        <div className='container' style={{ justifyContent: 'center', display:'flex' }}> 

        <div className='cart-icon'>
        <BsCartFill size={23} > </BsCartFill>
        </div>

        <div className='cart-number '
        style={{ textAlign:'center', color:'white', 
        backgroundColor:'red' , borderRadius:'50%', height:'20px' , width:'20px' , justifyContent:'center'}}
        >
        <h6>1</h6>
        </div>




        </div>

    );
}

export default CartWidget;
