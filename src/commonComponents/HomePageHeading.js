import React, { Component } from 'react'
import { Button, Container, Grid, Header, Icon } from 'semantic-ui-react'

class HomepageHeading extends Component {

  render () {
    const { headerProps: {headerText='', primaryActionText='', primaryActionRoute} } = this.props
    return (
      <Container text>
        <Header
          as='h2'
          content={headerText}
          inverted
          style={{
            fontSize: this.props.mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: this.props.mobile ? '0.5em' : '1.5em',
          }}
        />
        <Button primary size='huge' onClick={primaryActionRoute}>
          {primaryActionText}
          <Icon name='right arrow' />
        </Button>
      </Container>
    )
  }
}

export default HomepageHeading;
