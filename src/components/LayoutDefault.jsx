import React from 'react'

const LayoutDefault = ({children}) => {
  return (
    <div>
      <header>
        <nav>
          <div className="logo-wrapper">
            <img alt="Logo" src=""/>
          </div>
          <div className="cart-btn-wrapper">
            <img alt="cart" src=""/>
          </div>
        </nav>
      </header>
      {children}
      <footer>
        <ul>Footer
          <li>rad1</li>
          <li>rad2</li>
          <li>rad3</li>
        </ul>
      </footer>
    </div>
  )
}

export default LayoutDefault;