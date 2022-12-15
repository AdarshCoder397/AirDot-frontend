import React from "react";
import logo from "../../../img/logo.png";
import { ReactNavbar } from "overlay-navbar";
import { MdAccountCircle, MdShoppingCart } from "react-icons/md";
import { MdSearch } from "react-icons/md";

const Header = () => {
  return (
    <ReactNavbar
      burgerColor="#A20000"
      logo={logo}
      searchIcon="true"
      cartIcon="true"
      CartIconElement={MdShoppingCart}
      SearchIconElement={MdSearch}
      profileIcon="true"
      ProfileIconElement={MdAccountCircle}
      logoHoverColor="#1F1E1E"
      logoWidth="1115px"
      navColor1="#1f1e1e"
      logoTransition="0.5"
      logoAnimationTime="1"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/home"
      link2Url="/product"
      link3Url="/contact"
      link4Url="/about"
      link1Size="2.2vmax"
      link1Color="#FFE5E5"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      link1ColorHover="#760000"
      link1Family="Roboto"
      link1Margin="2.4vmax"
      searchIconMargin="2vmax"
      cartIconMargin="2vmax"
      profileIconMargin="2vmax"
    />
  );
};
export default Header;
