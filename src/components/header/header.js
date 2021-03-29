import React from 'react';
import './header.css'

const Header = () => {
  return(
    <div data-testid="header-pane" className="HeaderPane">
      <h1 data-testid="page-title" className="HeaderTitle">MyPublisher </h1>
    </div>
  )
}

export default Header;