import React, { Component } from 'react'
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react'

import { ResponsiveContainer, CreateBrowserHistory, HomePageHeading } from '../../commonComponents'
import CompletedTendor from './tendors/CompletedTendor'
import YourTendors from './tendors/YourTendors'


const AppHeaderProps = {
  'headerRightActionText': 'Profile',
  'headerRightAction': () => {
    // CreateBrowserHistory.push({
    //   pathname: "/authorization"
    // })
  },
}

const headerPrimaryContentProps = {
  'headerText':'Request a tendor now and get noticed by all our big vendors.',
  'primaryActionText':'Place a new Tender',
  'primaryActionRoute':() => {
    CreateBrowserHistory.push({
      pathname: "/client/newTendor"
    })
  }
}

class ClientHome extends Component {
  render() {
    return (
      <ResponsiveContainer HomePageHeading={HomePageHeading} headerPrimaryContentProps={headerPrimaryContentProps} AppHeaderProps={AppHeaderProps} location={this.props.location}>
        <Segment style={{ padding: '4em 0em' }} vertical>

          <CompletedTendor />
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </ResponsiveContainer>
    )
  }
}
export default ClientHome
