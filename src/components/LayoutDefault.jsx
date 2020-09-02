import React from "react";
import Cart from "./Cart";
import { useState } from "react";
import styled from "styled-components";

const LayoutDefault = ({ children }) => {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <header>
        <nav>
          <div className="logo-wrapper">
            <img alt="Logo" src="" />
          </div>
          <div onClick={handleClick} className="cart-btn-wrapper">
            <p>Open Cart</p>
          </div>
        </nav>
      </header>
      {!isHidden && <Cart />}
      {children}
      <footer>
        <ul>
          Footer
          <li>rad1</li>
          <li>rad2</li>
          <li>rad3</li>
        </ul>
      </footer>
    </div>
  );
};

export default LayoutDefault;

// const Cart = styled.div`
//   display: ${(isHidden) => (isHidden ? "block" : "none")};
// `;
