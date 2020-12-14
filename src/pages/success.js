import React from 'react'
import { Link } from 'gatsby'
import Button from '../components/button'
import styled from 'styled-components'
import Layout from '../components/layout'

const success = () => {
  return (
    <Layout>
      <SuccessStyles>
        <h3>Submission received, Thanks for contracting us</h3>
        <Link to="/">
          <Button color="var(--lightColor)" margin="2rem auto">
            Back Home
          </Button>
        </Link>
      </SuccessStyles>
    </Layout>
  )
}

export default success

const SuccessStyles = styled.div`
  margin-top: 10vh;
  text-align: center;
`
