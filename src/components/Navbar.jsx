import React from "react";
import Wrapper from "../wrappers/NavbarWrapper";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <Wrapper>
      <nav>
        <h1>Our Cart</h1>
        <div className="icon">
          <BsCart className="cart-icon"></BsCart>
          <span>{amount}</span>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
