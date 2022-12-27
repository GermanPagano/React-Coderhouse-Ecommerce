import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { FiAlignJustify } from "react-icons/fi";
import brand from "../../assets/img/brand/brand.png";
import CartWidget from "./CartWidget ";
import Favorites from "./Favorites";
import User from "./User";

const NavBar = () => {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light"  fixed="top">
      <MDBContainer >
      
        <MDBNavbarBrand className="brand-container" href="#/">
          <img src={brand} alt="brand" style={{ maxHeight: "50px" }} />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <FiAlignJustify />
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>




        <MDBCollapse navbar show={showNavSecond} >
          <MDBNavbarNav >
            <MDBNavbarLink active href="#/">
              Home
            </MDBNavbarLink>
            <MDBNavbarLink href="#">Games</MDBNavbarLink>
            <MDBNavbarLink href="#">Help</MDBNavbarLink>
          </MDBNavbarNav>

          <MDBNavbarLink href="#"><User/></MDBNavbarLink>
          <MDBNavbarLink href="#"><Favorites /></MDBNavbarLink>
          <MDBNavbarLink href="#"><CartWidget text={'5'}/></MDBNavbarLink>
          


        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavBar;
