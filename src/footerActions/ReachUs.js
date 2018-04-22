import React from 'react'
import { ResponsiveContainer, CreateBrowserHistory } from '../commonComponents'
import { Container, Header, Card } from 'semantic-ui-react'
const AppHeaderProps = {
  'headerRightActionText': 'Login/Signup',
  'headerRightAction': () => {
    CreateBrowserHistory.push({
      pathname: "/authorization"
    })
  },
}

const items = [
  {
    header: 'Headquarters',
    meta: 'Open since 2018',
    description: 'Number#, Street number, cross road, street name, city, state.'
  }
]

const ReachUs = (props) => {
  const {location} = props
  const containerProps = {location: '/', AppHeaderProps}
  return (
    <ResponsiveContainer {...containerProps}>
      <Container style={{marginTop: '3em'}}>
        <Header as='h1'>Reach Us</Header>
        <p>You are always welcome to visit us.</p>
        <Card.Group centered items={items} />
        <Header as='h3'>You can also email us @ www.example.com, and we will make sure that you get a quick response</Header>
      </Container>
    </ResponsiveContainer>
  )
}

export default ReachUs
