import React from 'react'
import { Link } from 'react-router-dom';
import { Segment, Container, List, Grid, Divider, Header } from 'semantic-ui-react'

const AppFooter = () => (
  <Segment
    inverted
    vertical
    style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
  >
    <Container textAlign='center'>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Know Us Better' />
            <List link inverted>
              <List.Item> <Link to='/about'>About Us</Link></List.Item>
              <List.Item as='a'>Our vision</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Contact Us' />
            <List link inverted>
              <List.Item as='a'>Reach Us</List.Item>
              <List.Item as='a'>Call Us</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 3' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Vendor Ka Tender' />
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
)

export default AppFooter
