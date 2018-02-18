import React, { Component } from 'react'
import { Container, Header, Button, Icon } from 'semantic-ui-react'
import { CreateBrowserHistory } from '../../../commonComponents'

class HomepageHeading extends Component {

  routeToAllTendersList = () => {
    CreateBrowserHistory.push({
      pathname: "/vendor/tenderlist"
    })
  }

  render () {
    return (
      <Container text>
        <Header
          as='h2'
          content='We bring to you all the tenders for the categories you have registered for.'
          inverted
          style={{
            fontSize: this.props.mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: this.props.mobile ? '0.5em' : '1.5em',
          }}
        />
        <Button primary size='huge' onClick={this.routeToAllTendersList}>
          Show all Tenders
          <Icon name='right arrow' />
        </Button>
      </Container>
    )
  }
}

export default HomepageHeading;
