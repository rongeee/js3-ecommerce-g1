import React from "react"
import Cart from "./Cart"
import { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import CartIkon from "./images/cart.png"

const LayoutDefault = ({ children }) => {
  const [isHidden, setIsHidden] = useState(false)

  const handleClick = () => {
    setIsHidden(!isHidden)
  }

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
      <footer>
        <ul>
          Footer
          <li>rad1</li>
          <li>rad2</li>
          <li>rad3</li>
        </ul>
      </footer>
    </>
  )
}

export default LayoutDefault

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
`

const Main = styled.main`
  padding-top: 80px;
`

const MyLink = styled(Link)`
  align-self: center;
  text-decoration: none;
  font-weight: bold;
  color: black;
`
const Logowrapper = styled.div`
  display: flex;
`
const Image = styled.img`
  width: 40px;
  height: 40px;
`
const P = styled.p`
  margin: 0;
`
