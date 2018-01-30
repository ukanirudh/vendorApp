import React, { Component } from 'react'
import { Container, Divider, Grid, Header, List, Segment, Button } from 'semantic-ui-react'
import CreateBrowserHistory from '../../commonComponents/CreateBrowserHistory'

/*Imported components*/
import { AppHeader } from '../../commonComponents'
import './authentication.css'

class Authentication extends Component {
  vendorLogin = () => {
    CreateBrowserHistory.push({ pathname: "/login/vendor" })
  }

  vendorSignup = () => {
      console.log('vendorSignup')
  }

  clientLogin = () => {
      CreateBrowserHistory.push({ pathname: "/login/client" })
  }

  clientSignup = () => {
      console.log('clientSignup')
  }

  render() {
    return (
      <div>
        <AppHeader />
        <Container text style={{ marginTop: '7em' }}>
          <h2> Login As </h2>
          <Segment.Group horizontal>
            <Segment>
              <Button animated='fade' size='massive' color='blue' onClick={this.vendorLogin}>
                <Button.Content visible>
                  Vendor
                </Button.Content>
                <Button.Content hidden>
                  Login in
                </Button.Content>
              </Button>
              <Divider horizontal>Or</Divider>
              <Button color='black' onClick={this.vendorSignup}>
                Sign Up
              </Button>
            </Segment>
            <Segment>
              <Button animated='fade' size='massive' color='blue' onClick={this.clientLogin}>
                <Button.Content visible >
                  Client
                </Button.Content>
                <Button.Content hidden >
                  Login in
                </Button.Content>
              </Button>
              <Divider horizontal>Or</Divider>
              <Button color='black' onClick={this.clientSignup}>
                Sign Up
              </Button>
            </Segment>
          </Segment.Group>
        </Container>

        <Segment
          inverted
          vertical
          style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
        >
          <Container textAlign='center'>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Group 1' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Group 2' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Group 3' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Footer Header' />
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Divider inverted section />
            <List horizontal inverted divided link>
              <List.Item as='a' href='#'>Site Map</List.Item>
              <List.Item as='a' href='#'>Contact Us</List.Item>
              <List.Item as='a' href='#'>Terms and Conditions</List.Item>
              <List.Item as='a' href='#'>Privacy Policy</List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    )
  }
}

export default Authentication
