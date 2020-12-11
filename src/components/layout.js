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
    --primaryColor: rgb(226,251,227);
  }

  body {
    font-family: 'Raleway', sans-serif;
  }

  li {
    list-style: none;
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
