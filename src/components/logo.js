// Logo.js
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  a {
    color: var(--primaryColor);
  }

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`
const Logo = () => {
  return (
    <LogoWrap>
      <Link to="/">
        <h1>wutNow</h1>
      </Link>
    </LogoWrap>
  )
}

export default Logo
