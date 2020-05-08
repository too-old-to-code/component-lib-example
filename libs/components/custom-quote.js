import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const BlockQuote = styled.blockquote`
  border: 0;
  margin: 0;
  padding: 0;
  display: inline;
  background: none;
  color: navajowhite;
  font-family: Georgia, serif;
  font-size: 1.2em;
  font-style: italic;
  line-height: 1.4 !important;
  margin: 0;
  position: relative;
  text-shadow: 0 1px black;
  z-index: 600;
  text-align: left;
  & p {
    color: #75808a;
    line-height: 1.4 !important;
  }
  &:before {
    content: "\\201c";
    color: #81bedb;
    font-size: 7.5em;
    font-weight: 700;
    opacity: 0.3;
    position: absolute;
    top: -0.4em;
    left: -0.2em;
    text-shadow: none;
    z-index: -300;
  }
`;

const Cite = styled.cite`
  color: black;
  display: block;
  font-size: 1.5em;
  text-align: right;
`;

export const CustomQuote = (props) => (
  <span style={{ display: "inline-block" }}>
    <BlockQuote cite={props.source}>{props.quote}</BlockQuote>
    <Cite>{props.author}</Cite>
  </span>
);

CustomQuote.propTypes = {
  source: PropTypes.any,
  quote: PropTypes.string,
  author: PropTypes.string,
};

// @media only screen and (min-width: 500px)
//   blockquote
//     font-size: 1.4em

//   cite
//     font-size: 1.6em
