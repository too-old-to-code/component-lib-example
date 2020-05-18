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
  @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    font-size: 1em;
    padding: 10px;
  }
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
  font-size: 1em;
  max-width: 100px;
  text-decoration: none;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    font-size: 1em;
    max-width: inherit;
  }
`

const PlainLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
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

const StyledTextArea = styled.textarea.attrs(() => ({
  rows: 5,
}))`
  ${formElement}
  resize: vertical;
`

const ContactUsPageTemplate = ({ data }) => {
  return (
    <MainArea style={{ overflow: "hidden" }}>
      <Row>
        <Col xs={12} md={6} push={{ md: 6 }}>
          <BoxPanel
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <address>
              {data.addressLine.map(line => {
                return <div key={line}>{line}</div>
              })}
              <br />
              <PlainLink href={`tel:${data.phoneNumber}`}>
                {data.phoneNumber}
              </PlainLink>
              <PlainLink href={`mailto:${data.email}`}>{data.email}</PlainLink>
            </address>
          </BoxPanel>
        </Col>
        <Col xs={12} md={6} pull={{ md: 6 }}>
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

const ContactUsPage = ({ data }) => {
  return <ContactUsPageTemplate data={data.sitedata.nodes[0]} />
}

export default ContactUsPage

export const pageQuery = graphql`
  query ContactUsPageTemplate {
    sitedata: allDataYaml {
      nodes {
        addressLine
        email
        phoneNumber
      }
    }
  }
`
