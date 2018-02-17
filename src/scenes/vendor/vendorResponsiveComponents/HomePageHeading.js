import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'

class HomepageHeading extends Component {

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
      </Container>
    )
  }
}

export default HomepageHeading;
