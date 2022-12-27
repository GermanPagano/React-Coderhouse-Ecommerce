import ButtonsCard from "./ButtonsCard";
import latets from "../../assets/img/sections-cards/latets.png";
import classics from '../../assets/img/sections-cards/classics.png'
import offers from '../../assets/img/sections-cards/offers.png'


//cargar lista de productos 

const ButtonsContainer = () => {

  return (
    <div className="container mt-4 ">
      <div className="row mt-2 g-4 justify-content-center">

      { /*  hacer el map para mostrar como return el card  */}
        <ButtonsCard text={"Latest releases"} img={latets} />

        <ButtonsCard text={"Offers"} img={offers} />

        <ButtonsCard text={"Classics"} img={classics} />

      </div>
    </div>
  );
};

export default ButtonsContainer;