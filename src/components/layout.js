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
