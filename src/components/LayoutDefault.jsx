import React from "react";
import Cart from "./Cart";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CartIkon from "./images/cart.png";

const LayoutDefault = ({ children }) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <header>
        <Nav>
          <Logowrapper>
            {/* <img alt="Logo" src="" /> */}
            <MyLink to={`/`}>Home</MyLink>
          </Logowrapper>

          <Image onClick={handleClick} src={CartIkon} alt="" />
        </Nav>
      </header>
      {!isHidden && <Cart />}
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
  margin: 0;
  width: 100%;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 1px solid #d7dbdd;
  box-shadow: 2px 2px 1px rgba(229, 231, 233, 0.75);
  padding: 1em 3em;
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
const Image = styled.img`
  width: 40px;
  height: 40px;
`;
const P = styled.p`
  margin: 0;
`;

const Footer = styled.footer`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
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
