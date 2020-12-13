import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Navlinks = () => {
  return (
    <>
      <NavItem to="/">
        <li>Blog</li>
      </NavItem>
      <NavItem to="/contact">
        <li>Contact</li>
      </NavItem>
      <NavItem>
        <li>
          <a
            href="http://localhost:8000/admin"
            target="_blank"
            rel="noreferrer"
          >
            Admin
          </a>
        </li>
      </NavItem>
    </>
  )
}

export default Navlinks

const NavItem = styled(Link)`
  text-decoration: none;
  color: var(--primaryColor);
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  a {
    color: var(--primaryColor);

    &:hover {
      color: var(--darkColor);
    }

    :after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0%;
      content: '.';
      color: transparent;
      background: var(--primaryColor);
      height: 1px;
      transition: all 0.4s ease-in;
    }
  }

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    background: var(--primaryColor);
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: var(--darkColor);
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    z-index: 6;
  }
`
