import React from "react";
import Card from "./Card";
import sports from "../../assets/img/sections-cards/sports.png";
 



const ItemListContainer = (props) => {
  return (
    <div className="container mt-4">
      {props.greeting}
      <div className="row mt-2 g-4">
        <Card text={"Sports"} img={sports} />

        <Card text={"Sports"} img={sports} />

        <Card text={"Sports"} img={sports} />

        <Card text={"Sports"} img={sports} />
      </div>
    </div>
  );
};

export default ItemListContainer;
