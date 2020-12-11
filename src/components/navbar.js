import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Navbar = () => (
  <NavStyles>
    <Link to="/">
      <h1>wutNow</h1>
    </Link>

    <ul>
      <Link to="/">
        <li>Blog</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
      <Link to="/">
        <li>Admin</li>
      </Link>
    </ul>
  </NavStyles>
)

export default Navbar

const NavStyles = styled.nav`
  text-align: center;

  h1 {
    margin: 0;
  }

  ul {
    display: flex;
    justify-content: space-around;
    margin: 0;
  }

  li {
    margin: 0;
  }
`
