import React, { Component } from 'react'
import { Grid, Header, Button, Segment, Icon, Dimmer } from 'semantic-ui-react'
import { CreateBrowserHistory } from '../../commonComponents'

class AuthenticationHomePage extends Component {

  componentWillMount = () => {
    this.setState({ vendorActionsVisible: false, clientActionsVisible: false })
  }

  signupRouteHandler = (userType) => {
    CreateBrowserHistory.push({
      pathname: `/authorization/signup/${userType}`
    })
  }

  loginRouteHandler = (userType) => {
    CreateBrowserHistory.push({
      pathname: "/authorization/login",
      search: `?type=${userType}`
    })
  }

  showMappingUserContent = (userType) => {
    return (
      <div>
        <Header as='h2' inverted>{userType === 'client' ? 'Cleint' : 'Vendor'}</Header>
        <Button color='blue' onClick={() => this.loginRouteHandler(userType)}> Login in </Button>
        <Button color='blue' onClick={() => this.signupRouteHandler(userType)}> Sign Up </Button>
      </div>
    )
  }

  handleFilterState = (currentActionUser, visibleFlag) => {
    switch(currentActionUser) {
      case 'vendor' :
        this.setState({ vendorActionsVisible: visibleFlag })
        break;
      case 'client' :
        this.setState({ clientActionsVisible: visibleFlag })
        break;
      default :
        break;
    }
  }

  handleShow = (currentActionUser) => {
    this.handleFilterState(currentActionUser, true)
  }

  handleHide = (currentActionUser) => {
    this.handleFilterState(currentActionUser, false)
  }

  render() {
    return (
      <Segment>
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content> You are a ? </Header.Content>
        </Header>
        <Grid
          style={{ height: '100%', marginTop: 45 }}
          verticalAlign='middle' >
          <Grid.Row  centered columns={3}>
            <Grid.Column className='user-type-grid'>
              <Dimmer.Dimmable
              className='user-type-content'
              as={Segment}
              dimmed={this.state.vendorActionsVisible}
              onMouseEnter={ () => this.handleShow('vendor')}
              onMouseLeave={ () => this.handleHide('vendor')}>
              <Dimmer active={this.state.vendorActionsVisible}>
                {this.showMappingUserContent('vendor')}
              </Dimmer>
                <Header as='h3' icon textAlign='center'>
                  <Icon name='building' circular />
                  <Header.Content> Vendor </Header.Content>
                </Header>
              </Dimmer.Dimmable>
            </Grid.Column>
            <Grid.Column className='user-type-grid'>
              <Dimmer.Dimmable
              className='user-type-content'
              as={Segment}
              dimmed={this.state.clientActionsVisible}
              onMouseEnter={() => this.handleShow('client')}
              onMouseLeave={() => this.handleHide('client')} >
              <Dimmer active={this.state.clientActionsVisible}>
                {this.showMappingUserContent('client')}
              </Dimmer>
                <Header as='h3' icon textAlign='center'>
                  <Icon name='user' circular />
                  <Header.Content>Client</Header.Content>
                </Header>
              </Dimmer.Dimmable>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default AuthenticationHomePage
