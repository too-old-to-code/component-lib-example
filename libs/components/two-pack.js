import React from "react"
import PropTypes from "prop-types"
// import styled from "styled-components"
import "flexboxgrid"

// const Box = styled.div`
//   position: relative;
//   display: flex;
//   height: 100%;
//   align-items: center;
//   justify-content: center;
//   // padding: 20px;
// `

export const TwoPack = props => {
  return (
    <div className="row" style={{ ...props.style, margin: 0 }}>
      <div className={`col-xs-12 col-sm-12 col-md-${props.division[0]}`}>
        {props.one}
      </div>
      <div className={`col-xs-12 col-sm-12 col-md-${props.division[1]}`}>
        {props.two}
      </div>
    </div>
  )
}

TwoPack.propTypes = {
  one: PropTypes.any,
  two: PropTypes.any,
  style: PropTypes.any,
  division: PropTypes.array,
}

TwoPack.defaultProps = {
  division: [6, 6],
}
