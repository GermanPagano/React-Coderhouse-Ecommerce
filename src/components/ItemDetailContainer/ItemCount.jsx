import React ,{ useState } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { GrFormAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr";



function ItemCount({ detail }) {
// estado para guardar la cantidad del producto elegido
const [cantToBuy, setcantToBuy] = useState(0);
const [disablerAddBtn, setDisablerAddBtn] = useState(false);
const [disablerRestBtn, setdisablerRestBtn] = useState(false);


const handleAddOne = () => {
  if( detail.stock >= 1 ) {
    setcantToBuy( cantToBuy + 1 )
    detail.stock = detail.stock -1

    disablerRestBtn  && ( setdisablerRestBtn( !disablerRestBtn ))
  }
  detail.stock < 1 && ( setDisablerAddBtn( !disablerAddBtn ))  
}

const handleRestOne = () => {
  if( cantToBuy >= 1 ){
    setcantToBuy( cantToBuy - 1 )
    detail.stock = detail.stock + 1

    disablerAddBtn  && ( setDisablerAddBtn( !disablerAddBtn ))
  }
  cantToBuy === 0 && ( setdisablerRestBtn( !disablerRestBtn ))
}

const [ RenderingButtons, setRenderingButtons] = useState(true);

const handleAddToCart = (evt) => {

  setRenderingButtons(!RenderingButtons)
}

    
  return (
    <div>
    { RenderingButtons ? 
    (
       <>
        <div className="add-rest-cant">
        <ButtonComponent
          onDisabler={disablerRestBtn}
          handlerOnclick={handleRestOne}
          text={<GrFormSubtract />}
        />
        {cantToBuy}
        <ButtonComponent
          onDisabler={disablerAddBtn}
          handlerOnclick={handleAddOne}
          text={<GrFormAdd />}
        />
      </div>

      <div className="add-rest-cant">
        <ButtonComponent
          onDisabler={false}
          handlerOnclick={() => handleAddToCart(detail)}
          text={"Add to cart"}
        />
      </div>
      </>
      
    ):(
        <div style={{ flexWrap:'wrap'}}> {` !gracias por comprar  ${cantToBuy} ${detail.title} `}
        <div>Termina tu compra <a href="#/"> aca</a> </div>
        <div>Termina tu compra <a href="#/"> aca</a> </div>
        <div>Termina tu compra <a href="#/"> aca</a> </div>
        </div>
    )
    }

    </div>
   
  );
}

export default ItemCount;
