import React, { Component } from 'react'
import { Button, Container, Grid, Header, Icon } from 'semantic-ui-react'
import { CreateBrowserHistory } from '../../../commonComponents'

class HomepageHeading extends Component {

  routeToNewTendor = () => {
    CreateBrowserHistory.push({
      pathname: "/client/newTendor"
    })
  }

  render () {
    return (
      <Container text>
        <Header
          as='h2'
          content='Request a tendor now and get noticed by all our big vendors'
          inverted
          style={{
            fontSize: this.props.mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: this.props.mobile ? '0.5em' : '1.5em',
          }}
        />
        <Button primary size='huge' onClick={this.routeToNewTendor}>
          Place a new Tender
          <Icon name='right arrow' />
        </Button>
      </Container>
    )
  }
}

export default HomepageHeading;
