import PropTypes from 'prop-types'
import React from 'react'

import MobileContainer from './MobileContainer'
import DesktopContainer from './DesktopContainer'

const ResponsiveContainer = (props) => {
  const { children, HomePageHeading='', headerPrimaryContentProps } = props
  return (
    <div>
      <DesktopContainer {...props}>{children}</DesktopContainer>
      <MobileContainer HomePageHeading={HomePageHeading} headerProps={headerPrimaryContentProps}>{children}</MobileContainer>
    </div>
  )
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer
