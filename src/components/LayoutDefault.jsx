import React from "react";
import Cart from "./Cart";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CartIkon from "./images/cart.png";

const LayoutDefault = ({ children }) => {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <header>
        <Nav>
          <Logowrapper>
            {/* <img alt="Logo" src="" /> */}
            <P>Logo</P>
            <MyLink to={`/`}>Home</MyLink>
          </Logowrapper>

          <CartWrapper onClick={handleClick} className="cart-btn-wrapper">
            <Image src={CartIkon} alt="" />
          </CartWrapper>
        </Nav>
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
const Nav = styled.nav`
  display: flex;
  height: 60px;
  width: 100%;
  margin: 0;
  padding: 5px;
  justify-content: space-between;
  flex-direction: row-reverse;
  background-color: #ffffff;
  border-bottom: 1px solid  #d7dbdd ;
  margin-bottom 10vh;
  box-shadow: 2px 2px 1px rgba( 229, 231, 233 , 0.75);
`;

const MyLink = styled(Link)`
  align-self: center;
  text-decoration: none;
  font-weight: bold;
  color: black;
`;
const Logowrapper = styled.div`
  padding: 20px;
  display: flex;
  width: 15%;
  justify-content: space-evenly;
`;
const CartWrapper = styled.div`
  padding-left: 20px;
  padding-top: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  block-size: 300px;
  inline-size: 300px;
`;
const P = styled.p`
  margin: 0;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
`;
