import React from "react";
import Item from "./Item";

function ItemList(props) {
  return (
    <>
      {props.products.map((element) => {
        const stockVerifier =
          element.stock < 1 ? "not available" : element.stock;
        return (
          <Item
            allItems={element}
            key={element.id}
            imgUrl={element.imgUrl}
            console={element.console}
            title={element.title}
            category={element.category}
            price={element.price}
            id={element.id}
            stockInitial={stockVerifier}
            handleAddtoCart={props.handleAddtoCart}
          ></Item>
        );
      })}
    </>
  );
}

export default ItemList;
