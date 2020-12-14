import React from 'react'
import Layout from '../components/layout'
import Button from '../components/button'
import styled from 'styled-components'
import { Link } from 'gatsby'

const contact = () => (
  <Layout>
    <ContactStyles>
      <h3>Contact Me</h3>
      <form>
        <label>
          <input type="text" name="name" placeholder="Enter name" required />
        </label>
        <label>
          <input type="email" name="email" placeholder="Enter email" required />
        </label>
        <label>
          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            required
          />
        </label>
        <label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="Enter message"
            required
          ></textarea>
        </label>
        <Link to="/success">
          <Button width="100%">Submit</Button>
        </Link>
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
    font-family: 'Raleway', sans-serif;
  }
`
