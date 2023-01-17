import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { GrFormAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr";
import "./StylesItemDetailContainer.css";
import { Link } from "react-router-dom";

function ItemCount({ detail }) {
  // estado para guardar la cantidad del producto elegido
  const [cantToBuy, setcantToBuy] = useState(0);
  const [disablerAddBtn, setDisablerAddBtn] = useState(false);
  const [disablerRestBtn, setdisablerRestBtn] = useState(false);

  const handleAddOne = () => {
    if (detail.stock >= 1) {
      setcantToBuy(cantToBuy + 1);
      detail.stock = detail.stock - 1;

      disablerRestBtn && setdisablerRestBtn(!disablerRestBtn);
    }
    detail.stock < 1 && setDisablerAddBtn(!disablerAddBtn);
  };

  const handleRestOne = () => {
    if (cantToBuy >= 1) {
      setcantToBuy(cantToBuy - 1);
      detail.stock = detail.stock + 1;

      disablerAddBtn && setDisablerAddBtn(!disablerAddBtn);
    }
    cantToBuy === 0 && setdisablerRestBtn(!disablerRestBtn);
  };

  const [RenderingButtons, setRenderingButtons] = useState(true);

  const handleAddToCart = () => {
    setRenderingButtons(!RenderingButtons);
  };

  return (
    <div>
      {RenderingButtons ? (
        <>
          <div className="add-rest-cant">
          <div className="add-rest-cant-box1"> 
          <ButtonComponent
              onDisabler={disablerRestBtn}
              handlerOnclick={handleRestOne}
              text={<GrFormSubtract />}
            />
            <span>{cantToBuy}</span>
            <ButtonComponent
              onDisabler={disablerAddBtn}
              handlerOnclick={handleAddOne}
              text={<GrFormAdd/>}
            /> 
            </div>
            <div className="add-rest-cant-box2"> 
            <ButtonComponent
              onDisabler={false}
              handlerOnclick={() => handleAddToCart(detail)}
              text={"Add to cart"}
            />
            </div>
          </div>
        </>
      ) : (
        <div className="box-finish-pay">
          {" "}
          {` ${cantToBuy}x ${detail.title} was added to cart `}
          <div>
            <span>
              Complete your purchase <Link to="/"> here </Link>
            </span>
          </div>
          <div>
            <ButtonComponent 
            text={"undo"}
            handlerOnclick={handleAddToCart}
             />
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemCount;
