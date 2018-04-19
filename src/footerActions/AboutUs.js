import React from 'react'
import { ResponsiveContainer, CreateBrowserHistory } from '../commonComponents'
import { Container, Header, Card, Image } from 'semantic-ui-react'
import im2 from '../assets/images/daniel.jpg'
const AppHeaderProps = {
  'headerRightActionText': 'Login/Signup',
  'headerRightAction': () => {
    CreateBrowserHistory.push({
      pathname: "/authorization"
    })
  },
}

const AboutUs = (props) => {
  const {location} = props
  const containerProps = {location, AppHeaderProps}
  return (
    <ResponsiveContainer {...containerProps}>
      <Container style={{marginTop: '3em'}}>
        <Header as='h1'>About Us</Header>
        <p>We are a small team of passionate entrepreneurs .</p>
        <Card.Group itemsPerRow={4}>
          <Card>
            <Image src={im2} />
            <Card.Content>
              <Card.Header>Daniel</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image src={im2} />
            <Card.Content>
              <Card.Header>Daniel</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image src={im2} />
            <Card.Content>
              <Card.Header>Daniel</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image src={im2} />
            <Card.Content>
              <Card.Header>Daniel</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </ResponsiveContainer>
  )
}

export default AboutUs
