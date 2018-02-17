import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, Container, Menu, Responsive, Segment, Visibility } from 'semantic-ui-react'
import HomePageHeading from './HomePageHeading'

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em' }} vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>Profile</Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomePageHeading />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}


HomePageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default DesktopContainer
