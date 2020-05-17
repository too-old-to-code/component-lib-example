import React from "react"
import styled, { css } from "styled-components"
import { Row, Col } from "react-grid-system"
import { BoxPanel } from "@custom-lib"

const StyledForm = styled.form`
  max-width: 600px;
  padding: 50px;
  background: blue;
  display: flex;
  flex-direction: column;
  font-size: 1.3em;
  background-color: #06426a;
  margin: 0 auto;
`

const formElement = css`
  margin-bottom: 20px;
  margin-top: 5px;
  font-size: 1em;
  padding: 2px;
`

const ActionButton = styled.button`
  padding: 10px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  font-size: 1.2em;
  width: 150px;
  text-decoration: none;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    font-size: 1.5em;
  }
`

const MainArea = styled.main`
  padding-top: 80px;
`

const StyledLabel = styled.label`
  color: white;
`

const StyledInput = styled.input`
  ${formElement}
`

const StyledTextArea = styled.textarea.attrs(({}) => ({
  rows: 5,
}))`
  ${formElement}
  resize: vertical;
`

const ContactUsPage = () => {
  return (
    <MainArea>
      <Row>
        <Col xs={12} md={6}>
          <BoxPanel>
            <StyledForm name="contact" method="POST" data-netlify="true">
              <StyledLabel htmlFor="email">Your email</StyledLabel>
              <StyledInput
                type="text"
                name="email"
                placeholder="Email"
                id="email"
              />
              <StyledLabel htmlFor="phone">Your phone number</StyledLabel>
              <StyledInput
                type="text"
                name="phone"
                placeholder="phonenumber"
                id="phone"
              />
              <StyledLabel htmlFor="customer-query">Your query</StyledLabel>
              <StyledTextArea
                name="customerQuery"
                id="customer-query"
              ></StyledTextArea>
              <ActionButton type="submit">Submit</ActionButton>
            </StyledForm>
          </BoxPanel>
        </Col>
      </Row>
    </MainArea>
  )
}

export default ContactUsPage
