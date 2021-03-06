import React from 'react'
import styled from 'styled-components'

const Button = props => (
  <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
  font-family: 'Raleway', sans-serif;
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: ${props => props.props.width};
  background: ${props => props.props.background || 'var(--primaryColor)'};
  color: ${props => props.props.color || '#FFFFFF'};
  font-size: ${props => props.props.fontSize || '15px'};
  font-weight: ${props => props.props.fontWeight || '600'};
  border-radius: ${props => props.props.radius || '3px'};
  margin: ${props => props.props.margin};

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
  }
`

export default Button
