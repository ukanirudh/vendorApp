import React, { Component } from 'react'
import { Container, Segment, Image, Menu, Button, Visibility } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class AppHeader extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  render() {
    const { HomePageHeading='', headerProps, AppHeaderProps, location } = this.props
    const { headerRightActionText='', headerRightAction} = AppHeaderProps
    const { fixed } = this.state
    return (
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
              <Menu.Item as='a' header>
                <Image
                  size='mini'
                  src='/logo.png'
                  style={{ marginRight: '1.5em' }}
                />
                Project Name
              </Menu.Item>
              <Menu.Item  active><Link to={location.pathname}>Home</Link></Menu.Item>
              <Menu.Item as='a'>Work</Menu.Item>
              <Menu.Item as='a'>Company</Menu.Item>
              <Menu.Item as='a'>Careers</Menu.Item>
              <Menu.Item position='right'>
                <Button as='a' inverted={!fixed} onClick={headerRightAction}>{headerRightActionText}</Button>
              </Menu.Item>
            </Container>
          </Menu>
          {HomePageHeading ? <HomePageHeading headerProps={headerProps}/> : ''}
        </Segment>
      </Visibility>
    )
  }
}

export default AppHeader
