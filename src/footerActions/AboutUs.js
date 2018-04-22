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

const teamInfo = [
  {
    name: 'Name-1',
    position: 'Ceo',
    bio: 'Ceo',
    imageUrl: '../assets/images/daniel.jpg'
  },
  {
    name: 'Name-2',
    position: 'Cto',
    bio: 'Cto',
    imageUrl: '../assets/images/daniel.jpg'
  },
  {
    name: 'Name-3',
    position: 'VP',
    bio: 'VP',
    imageUrl: '../assets/images/daniel.jpg'
  },
  {
    name: 'Name-4',
    position: 'Dev',
    bio: 'Dev',
    imageUrl: '../assets/images/daniel.jpg'
  },
  {
    name: 'Name-5',
    position: 'Dev',
    bio: 'Dev',
    imageUrl: '../assets/images/daniel.jpg'
  },
]
const AboutUs = (props) => {
  const {location} = props
  const containerProps = {location: '/', AppHeaderProps}
  return (
    <ResponsiveContainer {...containerProps}>
      <Container style={{marginTop: '3em'}}>
        <Header as='h1'>About Us</Header>
        <p>We are a small team of passionate entrepreneurs .</p>
        <Card.Group itemsPerRow={5}>
        {
          teamInfo.map((teamMember, index) => {
            const {name, position, bio, imageUrl} = teamMember
            return (
              <Card key={index}>
                <Image src={imageUrl} />
                <Card.Content>
                  <Card.Header>{name}</Card.Header>
                  <Card.Meta>{position}</Card.Meta>
                  <Card.Description>{bio}</Card.Description>
                </Card.Content>
              </Card>
            )
          })
        }
        </Card.Group>
      </Container>
    </ResponsiveContainer>
  )
}

export default AboutUs
