import PropTypes from 'prop-types'
import React from 'react'

import MobileContainer from './MobileContainer'
import DesktopContainer from './DesktopContainer'

const ResponsiveContainer = ({ children, HomePageHeading='' }) => {
  return (
    <div>
      <DesktopContainer HomePageHeading={HomePageHeading}>{children}</DesktopContainer>
      <MobileContainer HomePageHeading={HomePageHeading}>{children}</MobileContainer>
    </div>
  )
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer
