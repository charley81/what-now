import React from 'react'
import Navbar from './navbar'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <GlobalStyle />
        <Navbar />
        <main
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: '700px',
            padding: '1rem'
          }}
        >
          {children}
        </main>
        <Footer>© {new Date().getFullYear()}, wutNow</Footer>
      </Wrapper>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  :root {
    --primaryColor: #586F7C;
    --lightColor: #FFFFFF;
    --darkColor: #122C34;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Raleway', sans-serif;
    color: var(--darkColor);
    background: var(--lightColor);
    background-color: var(--lightColor);
    background-color: #ffffff;
    background-color: #DFDBE5;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23586f7c' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--primaryColor);
  }
`
const Wrapper = styled.div`
  min-height: 100vh;
`
const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
