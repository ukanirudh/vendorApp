import React from 'react'
import { ResponsiveContainer, CreateBrowserHistory } from '../commonComponents'
import { Container, Header } from 'semantic-ui-react'

const AppHeaderProps = {
  'headerRightActionText': 'Login/Signup',
  'headerRightAction': () => {
    CreateBrowserHistory.push({
      pathname: "/authorization"
    })
  },
}

const CallUs = (props) => {
  const {location} = props
  const containerProps = {location: '/', AppHeaderProps}
  return (
    <ResponsiveContainer {...containerProps}>
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>Semantic UI React Fixed Template</Header>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts.</p>
      </Container>
    </ResponsiveContainer>
  )
}

export default CallUs
