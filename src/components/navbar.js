import React, { useState } from 'react'
import { Link } from 'gatsby'
import NavLinks from './NavLinks'
import styled from 'styled-components'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <h1>
        <Link to="/">wutNow</Link>
      </h1>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;
  background: var(--darkColor);
  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  @media (max-width: 768px) {
    display: flex;
  }
`
const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  background: var(--secondaryColor);
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    transition: var(--transition);
    top: 8vh;
    left: ${props => (props.open ? '-100%' : '0')};
  }
`
const Hamburger = styled.div`
  background: var(--primaryColor);
  width: 30px;
  height: 3px;
  transition: var(--transition);
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: inherit;
    content: '';
    position: absolute;
    transition: var(--transition);
  }
  ::before {
    transform: ${props =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? '0' : '1')};
    transform: ${props => (props.open ? 'rotate(90deg)' : 'rotate(0deg)')};
    top: 10px;
  }
`
