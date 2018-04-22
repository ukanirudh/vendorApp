import React, { Component } from 'react'
import { Button, Container, Divider, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { ResponsiveContainer, CreateBrowserHistory, HomePageHeading } from '../commonComponents'
import Testimonials from './Testimonials'
import homeImg from '../assets/images/image.png'
const headerPrimaryContentProps = {
    'headerText':'We connect the Vendors and Clients with the best deals',
    'primaryActionText':'Singup Now',
    'primaryActionRoute':() => {
      CreateBrowserHistory.push({
        pathname: "/authorization"
      })
    }
}

const AppHeaderProps = {
  'headerRightActionText': 'Login/Signup',
  'headerRightAction': () => {
    CreateBrowserHistory.push({
      pathname: "/authorization"
    })
  },
}

class ApplicationHomePage extends Component {
  render() {
    const props = {location: '/', AppHeaderProps, headerPrimaryContentProps, HomePageHeading}
    return (
    <ResponsiveContainer {...props} >
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
              <p style={{ fontSize: '1.33em' }}>
                We can give your company superpowers to do things that they never thought possible. Let us delight
                your customers and empower your needs... through pure data analytics.
              </p>
              <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
              <p style={{ fontSize: '1.33em' }}>
                Yes thats right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image bordered rounded size='large' src={homeImg} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em', background: 'cadetblue' }} vertical>
        <Header as='h3' style={{ fontSize: '2em' }}>Our Testimonials</Header>
        <Container> <Testimonials /> </Container>
      </Segment>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
          <p style={{ fontSize: '1.33em' }}>
            Instead of focusing on content creation and hard work, we have learned how to master the art of doing
            nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
            and worth your attention.
          </p>
          <Button as='a' size='large'>Read More</Button>
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Case Studies</a>
          </Divider>
          <Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
          <p style={{ fontSize: '1.33em' }}>
            Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
            true.
            It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
          </p>
          <Button as='a' size='large'>I'm Still Quite Interested</Button>
        </Container>
      </Segment>
    </ResponsiveContainer>
    )
  }
}

export default ApplicationHomePage
