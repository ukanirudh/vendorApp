import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Responsive } from 'semantic-ui-react'
import AppHeader from './AppHeader'

class DesktopContainer extends Component {
  state = {}

  render() {
    const { children, HomePageHeading='', AppHeaderProps, headerPrimaryContentProps, location } = this.props
    return (
      <Responsive {...Responsive.onlyComputer}>
        <AppHeader location={location} HomePageHeading={HomePageHeading} AppHeaderProps={AppHeaderProps} headerProps={headerPrimaryContentProps} />
        {children}
      </Responsive>
    )
  }
}


DesktopContainer.propTypes = {
  mobile: PropTypes.bool,
  children: PropTypes.node
}

export default DesktopContainer
