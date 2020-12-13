import React from 'react'
import Layout from '../components/layout'
import Button from '../components/button'
import styled from 'styled-components'

const contact = () => (
  <Layout>
    <ContactStyles>
      <h3>Contact Me</h3>
      <form>
        <input type="text" name="name" placeholder="Enter name" />
        <input type="email" name="email" placeholder="Enter email" />
        <input type="text" name="subject" placeholder="Enter subject" />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Enter message"
        ></textarea>
        <Button width="100%">Submit</Button>
      </form>
    </ContactStyles>
  </Layout>
)

export default contact

const ContactStyles = styled.div`
  max-width: 600px;

  h3 {
    text-align: center;
    margin: 2rem 0;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    margin: 1rem 0;
    padding: 0.5rem;
    outline: transparent;
    border: transparent;
    border-bottom: 1px solid var(--primaryColor);
  }
`
