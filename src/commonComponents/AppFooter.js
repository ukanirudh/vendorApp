import React from 'react'
import { Link } from 'react-router-dom';
import { Segment, Container, List, Grid, Divider, Header, Icon } from 'semantic-ui-react'

const AppFooter = () => (
  <Segment
    inverted
    vertical
    style={{ margin: '3em 0em 0em', padding: '2em 0em' }}
  >
    <Container textAlign='center'>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header inverted as='h4' content='Know Us Better' />
            <List link inverted>
              <List.Item><Link to='/about'>About Us</Link></List.Item>
              <List.Item as='a'><Link to='/ourvision'>Our Vision</Link></List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as='h4' content='Contact Us' />
            <List link inverted>
              <List.Item as='a'><Link to='/reachus'>Reach Us</Link></List.Item>
              <List.Item as='a'>Call Us</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={8} >
            <Header inverted as='h4' content='Vendor Ka Tender' />
            <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider inverted section />
      <List horizontal inverted divided link>
        <List.Item as='a' href='https://www.linkedin.com'><Icon name='linkedin' /></List.Item>
        <List.Item as='a' href='https://facebook.com'><Icon name='facebook f' /></List.Item>
        <List.Item as='a' href='http://twitter.com/'><Icon name='twitter' /></List.Item>
        <List.Item as='a' href='#'>Terms and Conditions</List.Item>
        <List.Item as='a' href='#'>Privacy Policy</List.Item>
      </List>
    </Container>
  </Segment>
)

export default AppFooter
