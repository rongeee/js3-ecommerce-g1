import React from "react";
import Cart from "./Cart";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CartIkon from "./images/cart.png";
import { AnimatePresence } from "framer-motion";

const LayoutDefault = ({ children }) => {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <header>
        <Nav>
          <Logowrapper>
            {/* <img alt="Logo" src="" /> */}
            <MyLink to="/">Home</MyLink>
          </Logowrapper>

          <CartBtn onClick={handleClick} src={CartIkon} alt="" />
        </Nav>
      </header>
      <AnimatePresence exitBeforeEnter>
        {!isHidden && <Cart isHidden={isHidden} setIsHidden={setIsHidden} />}
      </AnimatePresence>
      <Main>{children}</Main>
      <Footer>
        <FooterTextWrapper>
          <H3>Made by</H3>
          <Ul>
            <li>Andreas</li>
            <li>Janis</li>
            <li>Hannah</li>
            <li>Patric</li>
            <li>Birk</li>
          </Ul>
        </FooterTextWrapper>
      </Footer>
    </>
  );
};

export default LayoutDefault;

// const Cart = styled.div`
//   display: ${(isHidden) => (isHidden ? "block" : "none")};
// `;
const Nav = styled.nav`
  display: flex;
  position: fixed;
  z-index: 2;

  width: 100%;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 5px 5px 10px 5px rgba(189, 195, 199, 0.2);
  padding: 16px 20px;
`;

const Main = styled.main`
  padding-top: 100px;
  min-block-size: 100vh;
`;

const MyLink = styled(Link)`
  align-self: center;
  text-decoration: none;
  font-weight: bold;
  color: black;
`;
const Logowrapper = styled.div`
  display: flex;
`;
const CartBtn = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Footer = styled.footer`
  background-color: #ffffff;
  border-top: 1px solid #d7dbdd;
  box-shadow: 2px 2px 1px rgba(229, 231, 233, 0.75);
  padding: 80px 0;
`;

const FooterTextWrapper = styled.div`
  width: max-content;
  margin: 0 auto;
  color: grey;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding-left: 7px;
`;

const H3 = styled.h3`
  margin-bottom: 10px;
  color: darkslategrey;
`;
