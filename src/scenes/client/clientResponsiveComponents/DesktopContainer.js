import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, Container, Menu, Responsive, Segment, Visibility } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children, HomePageHeading='' } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' style={{ padding: '1em 0em' }} vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item  active><Link to='/client'>Home</Link></Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>Profile</Button>
                </Menu.Item>
              </Container>
            </Menu>
            {HomePageHeading ? <HomePageHeading /> : ''}
          </Segment>
        </Visibility>
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
