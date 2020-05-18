import React from "react"
import PropTypes from "prop-types"
import { AboutUsPageTemplate } from "../../templates/about-us"

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()
  console.log(entry)
  if (data) {
    console.log(data)
    return (
      <AboutUsPageTemplate
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        image={getAsset(data.image)}
        mobileImage={getAsset(data.mobileImage)}
        aboutUs={data.aboutUs}
        ourTeam={data.ourTeam}
        profiles={data.profiles}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AboutUsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AboutUsPagePreview
