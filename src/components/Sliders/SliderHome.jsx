import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./StyleSliderHome.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CatchProductsOfMock from "../../services/mockService";
import { CatchProducts } from "../../services/firebase";

const SliderHome = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    CatchProducts()
      // de ser exitosa la devolucion guardo lo recibido en el useState
      .then((response) => setProduct(response))
      // de ser erronea la respuesta mostrar el error por consola
      .catch((e) => console.log(e));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-Home-Container">
      <Slider {...settings} autoplay className="slider">
        {products.map((item) => (
          <div key={item.id} className="box-slider-home ">
            <img src={item.imgUrl} alt={item.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderHome;
