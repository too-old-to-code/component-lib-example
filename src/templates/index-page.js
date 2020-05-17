import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Tween, Timeline } from "react-gsap"
import styled from "styled-components"
import { Row, Col } from "react-grid-system"
import { setConfiguration } from "react-grid-system"

import {
  Parallax,
  CheckerDuo,
  PopIn,
  BoxPanel,
  // MainArea
} from "@custom-lib"

setConfiguration({
  gridColumns: 12,
  breakpoints: [576, 900, 1024, 1200],
})

const ImageText = styled.div`
  padding-top: calc(${({ theme }) => theme?.navbar?.height} + 20px);
  margin-left: 50px;
  font-family: "Teko";
  font-size: 4em;
  font-weight: bold;
  color: rgb(160, 216, 123);
  text-shadow: 0px 1px 1px black;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    margin-left: 20px;
    font-size: 2.5em;
  }
`

const ActionButton = styled.button`
  padding: 10px 40px;
  background-color: #06426a;
  color: white;
  border: none;
  font-size: 2em;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    font-size: 1.5em;
  }
`

const ColumnText = styled.div`
  // column-width: 400px;
  // column-gap: 40px;
  padding: 0 40px;
  color: #708080;
  p {
    line-height: 1.4em;
    margin: 20px 0 !important;
    &:first-child {
      margin-top: 0px !important;
    }
  }
  @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    padding: 0;
    text-align: justify;
  }
`

const BulletPointList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  ul {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: left;
    margin-left: 20px;
    justify-content: space-around;
    li {
      margin: 10px 0;
    }
  }
  @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    margin: 30px 0;
    ul {
      margin-left: 0;
    }
  }
`

const HeadedColumnText = ({ heading, children }) => {
  return (
    <React.Fragment>
      <h3 style={{ textAlign: "center", color: "#0A99D8", padding: "0 40px" }}>
        {heading}
      </h3>
      <ColumnText>{children}</ColumnText>
    </React.Fragment>
  )
}

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  image,
  mobileImage,
  categoryPitches,
  introduction,
  whyPickUsList,
}) => (
  <div>
    <Parallax
      image={
        !!image.childImageSharp ? (
          <Img
            fluid={image.childImageSharp.fluid}
            imgStyle={{ objectFit: "cover", objectPosition: "70% 100%" }}
          />
        ) : (
          <img src={image} />
        )
      }
      mobileImage={
        !!image.childImageSharp ? (
          <Img
            fluid={mobileImage.childImageSharp.fluid}
            imgStyle={{ objectFit: "cover", objectPosition: "70% 100%" }}
          />
        ) : (
          <img src={mobileImage} />
        )
      }
      height="90vh"
      mobileHeight="90vh"
      staticContent={
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            // display: "flex",
            // alignItems: "center",
          }}
        >
          <Row style={{ height: "100%" }}>
            <Col xs={12} sm={6}>
              <ImageText>
                <Timeline duration="4">
                  {["Independent", "Trusted", "Professional"].map(word => {
                    return (
                      <Tween
                        key={word}
                        ease="Power2.easeIn"
                        duration="0.5"
                        from={{
                          xPercent: -150,
                        }}
                      >
                        <div>{word}</div>
                      </Tween>
                    )
                  })}
                  <Tween
                    ease="Power2.easeIn"
                    duration="0.5"
                    from={{
                      opacity: 0,
                    }}
                  >
                    <div style={{ color: "white" }}>Insurance brokers</div>
                  </Tween>
                </Timeline>
              </ImageText>
            </Col>
            <Col xs={12} sm={6}>
              <BoxPanel
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <ActionButton>Get Quote</ActionButton>
              </BoxPanel>
            </Col>
          </Row>
        </div>
      }
    />

    <BoxPanel>
      <Row>
        <Col md={8} sm={6} xs={12}>
          <HeadedColumnText heading={introduction.heading}>
            {introduction.text.map(({ paragraph }) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </HeadedColumnText>
        </Col>
        <Col
          md={4}
          sm={6}
          xs={12}
          style={{ display: "flex", alignItems: "center" }}
        >
          <BulletPointList
            style={{ backgroundColor: "#06426A", color: "#FCFAFF" }}
          >
            <h3 style={{ marginBottom: 0 }}>Why pick us?</h3>
            <ul>
              {whyPickUsList.map(item => {
                return <li key={item.reason}>{item.reason}</li>
              })}
            </ul>
          </BulletPointList>
        </Col>
      </Row>
    </BoxPanel>
    {categoryPitches &&
      categoryPitches.map((pitch, index) => {
        return (
          <CheckerDuo
            key={pitch.title}
            image={
              !!image.childImageSharp ? (
                <Img
                  fluid={pitch.image.childImageSharp.fluid}
                  loading="lazy"
                  alt="mything"
                />
              ) : (
                <img src={pitch.image} />
              )
            }
            height="350px"
            textPosition={index % 2 === 0 ? "right" : "left"}
            backgroundColor="rgba(50,70,80, .85)"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                maxWidth: "70%",
                color: "white",
                fontSize: "1.2em",
                padding: "30px 0",
              }}
            >
              <PopIn>
                <h2 style={{ margin: 0, textAlign: "center" }}>
                  {pitch.title}
                </h2>
                <p>{pitch.text}</p>
              </PopIn>
            </div>
          </CheckerDuo>
        )
      })}
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      title={frontmatter.title}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      image={frontmatter.image}
      mobileImage={frontmatter.mobileImage}
      categoryPitches={frontmatter.categorypitch}
      introduction={frontmatter.introduction}
      whyPickUsList={frontmatter.whyPickUsList}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        introduction {
          heading
          text {
            paragraph
          }
        }
        categorypitch {
          text
          title
          image {
            childImageSharp {
              fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        whyPickUsList {
          reason
        }
        image {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobileImage {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`
