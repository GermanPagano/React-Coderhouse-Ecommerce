import React  from 'react'
import './StylesBtnAddToCart.css'

function BtnAddToCart({ allItems  , handleAddtoCart }) {



  return (
    <button className="btn btn-secondary btn-card" onClick={() => handleAddtoCart(allItems)} disabled={allItems.stock<1}>
    Add to cart
  </button>
  )
}

export default BtnAddToCart
