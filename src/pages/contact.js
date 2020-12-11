import React from 'react'
import Layout from '../components/layout'
import Button from '../components/button'

const contact = () => (
  <Layout>
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
      <button>Submit</button>
    </form>
  </Layout>
)

export default contact
