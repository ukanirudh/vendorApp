import React, { Component } from 'react'
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react'

import HomePageHeading from './clientResponsiveComponents/HomePageHeading'
import ResponsiveContainer from './clientResponsiveComponents/ResponsiveContainer'
import CompletedTendor from './tendors/CompletedTendor'
import YourTendors from './tendors/YourTendors'

class ClientHome extends Component {
  render() {
    return (
      <ResponsiveContainer HomePageHeading={HomePageHeading}>
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
