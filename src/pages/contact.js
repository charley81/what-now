import React from 'react'
import Layout from '../components/layout'
import Button from '../components/button'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default () => (
  <Layout>
    <ContactStyles>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: ''
        }}
        onSubmit={(values, actions) => {
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact-demo', ...values })
          })
            .then(() => {
              alert('Success')
              actions.resetForm()
            })
            .catch(() => {
              alert('Error')
            })
            .finally(() => actions.setSubmitting(false))
        }}
        validate={values => {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          const errors = {}
          if (!values.name) {
            errors.name = 'Name Required'
          }
          if (!values.email || !emailRegex.test(values.email)) {
            errors.email = 'Valid Email Required'
          }
          if (!values.message) {
            errors.message = 'Message Required'
          }
          return errors
        }}
      >
        {() => (
          <div className="form-wrap">
            <h2>Contact Me</h2>
            <Form name="contact-demo" data-netlify={true}>
              <label htmlFor="name">Name: </label>
              <Field name="name" placeholder="Enter name" />
              <ErrorMessage name="name" component="div" className="error" />
              <label htmlFor="email">Email: </label>
              <Field name="email" placeholder="Enter email" />
              <ErrorMessage name="email" component="div" className="error" />
              <label htmlFor="message">Message: </label>
              <Field
                name="message"
                component="textarea"
                placeholder="Enter message"
              />
              <ErrorMessage name="message" component="div" className="error" />

              <Button type="submit" width="100%" margin="1rem 0 0">
                Submit
              </Button>
            </Form>
          </div>
        )}
      </Formik>
    </ContactStyles>
  </Layout>
)

const ContactStyles = styled.div`
  margin-top: 10vh;

  form {
    margin-top: 2rem;
  }

  h2 {
    text-align: center;
  }

  label {
    display: block;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    font-family: 'Raleway', sans-serif;
  }

  .error {
    color: red;
    font-size: 0.5rem;
  }
`
