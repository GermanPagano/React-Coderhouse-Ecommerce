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
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { FiAlignJustify } from "react-icons/fi";
import brand from "../../assets/img/brand/brand.png";
import CartWidget from "./CartWidget ";
import Favorites from "./Favorites";
import User from "./User";
import "./NavStyles.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar className="nav" expand="lg" fixed="top">
      <MDBContainer className="nav-container">
        <MDBNavbarBrand className="brand-container" href="#/">
          <Link to={"/"}>
            <img src={brand} alt="brand" />
          </Link>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <FiAlignJustify className="nav-ico-toggler" />
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavSecond} className="nav-link">
          <MDBNavbarNav>
            <MDBNavbarLink>
              <Link to="/">Home</Link>
            </MDBNavbarLink>
            <MDBNavbarLink>
              <Link to="/about">About</Link>
            </MDBNavbarLink>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Consoles
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem  className="nav-category">
                    <Link to="/Category/PC">PC</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem  className="nav-category">
                    <Link to="/Category/PS4">PS4</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem  className="nav-category">
                    <Link to="/Category/XBOX">XBOX</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBNavbarLink className="nav-ico-actions">
            <Link to={"/login"}>
              <User />
            </Link>
          </MDBNavbarLink>
          <MDBNavbarLink className="nav-ico-actions">
            <Link to="/favourites">
              <Favorites />
            </Link>
          </MDBNavbarLink>
          <MDBNavbarLink className="nav-ico-actions">
            <Link to={"/cart"}>
              <CartWidget 
                text={1}
              />
            </Link>
          </MDBNavbarLink>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavBar;
