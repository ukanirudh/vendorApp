import React, { Component } from 'react'
import { Grid, Header, Button, Segment, Icon, Dimmer } from 'semantic-ui-react'
import CreateBrowserHistory from '../../commonComponents/CreateBrowserHistory'

/*Imported components*/
import { AppHeader, AppFooter } from '../../commonComponents'
import './authentication.css'

class Authentication extends Component {

  componentWillMount = () => {
    this.setState({
      vendorActionsVisible: false,
      clientActionsVisible: false
    })
  }

  vendorLogin = () => {
    CreateBrowserHistory.push({
      pathname: "/login",
      search: "?type=vendor"
    })
  }

  vendorSignup = () => {
    CreateBrowserHistory.push({
      pathname: "/signup/vendor"
    })
  }

  clientLogin = () => {
    CreateBrowserHistory.push({
      pathname: "/login",
      search: "?type=client"
    })
  }

  clientSignup = () => {
    CreateBrowserHistory.push({
      pathname: "/signup/client"
    })
  }

  vendorContent = () => {
    return (
      <div>
        <Header as='h2' inverted>Vendor</Header>
        <Button color='blue' onClick={this.vendorLogin}>
          Login in
        </Button>
        <Button color='blue' onClick={this.vendorSignup}>
          Sign Up
        </Button>
      </div>
    )
  }

  clientContent = () => {
    return (
      <div>
        <Header as='h2' inverted>Client</Header>
        <Button color='blue' onClick={this.clientLogin}>
          Login in
        </Button>
        <Button color='blue' onClick={this.clientSignup}>
          Sign Up
        </Button>
      </div>
    )
  }

  handleFilterState = (currentActionUser, visibleFlag) => {
    console.log(currentActionUser)
    switch(currentActionUser) {
      case 'vendor' :
        this.setState({ vendorActionsVisible: visibleFlag })
        break;
      case 'client' :
        this.setState({ clientActionsVisible: visibleFlag })
        break;
      case 'default' :
        break;
    }
  }

  handleShow = (currentActionUser) => {
    this.handleFilterState(currentActionUser, true)
  }
  handleHide = ( currentActionUser ) => {
    this.handleFilterState(currentActionUser, false)
  }

  render() {
    const { active } = this.state
    return (
      <div style={{ padding: '0px 10px' }}>
        <AppHeader />
        <Segment text style={{ marginTop: '7em' }}>
          <h2> You are A </h2>
          <Grid
            style={{ height: '100%', marginTop: 45 }}
            verticalAlign='middle'
          >
          <Grid.Row  centered columns={3}>
            <Grid.Column className='user-type-grid'>
              <Dimmer.Dimmable
              className='user-type-content'
              as={Segment}
              dimmed={this.state.vendorActionsVisible}
              onMouseEnter={ () => this.handleShow('vendor')}
              onMouseLeave={ () => this.handleHide('vendor')}>
              <Dimmer active={this.state.vendorActionsVisible}>
                {this.vendorContent()}
              </Dimmer>
                <Header as='h3' textAlign='center'>Vendor</Header>
              </Dimmer.Dimmable>
            </Grid.Column>

            <Grid.Column className='user-type-grid'>
              <Dimmer.Dimmable
              className='user-type-content'
              as={Segment}
              dimmed={this.state.clientActionsVisible}
              onMouseEnter={ () => this.handleShow('client')}
              onMouseLeave={ () => this.handleHide('client')}>
              <Dimmer active={this.state.clientActionsVisible}>
                {this.clientContent()}
              </Dimmer>
                <Header as='h3' textAlign='center'>Client</Header>
              </Dimmer.Dimmable>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        </Segment>
        <AppFooter />
      </div>
    )
  }
}

export default Authentication
