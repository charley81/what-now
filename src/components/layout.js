import React from 'react'
import styled from 'styled-components'

import { rhythm, scale } from '../utils/typography'
import Navbar from './navbar'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <Navbar />
        <main
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
          }}
        >
          {children}
        </main>
        <Footer>© {new Date().getFullYear()}, wutNow</Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
