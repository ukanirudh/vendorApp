import React, { Component } from 'react'
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react'

import { ResponsiveContainer, CreateBrowserHistory, HomePageHeading } from '../../commonComponents'
import CompletedTendor from './tendors/CompletedTendor'
import YourTendors from './tendors/YourTendors'


const AppHeaderProps = {
  'headerRightActionText': 'Profile',
  'headerRightAction': () => {
    // CreateBrowserHistory.push({
    //   pathname: "/authorization"
    // })
  },
}

const headerPrimaryContentProps = {
  'headerText':'Request a tendor now and get noticed by all our big vendors.',
  'primaryActionText':'Place a new Tender',
  'primaryActionRoute':() => {
    CreateBrowserHistory.push({
      pathname: "/client/newTendor"
    })
  }
}

class ClientHome extends Component {
  render() {
    return (
      <ResponsiveContainer HomePageHeading={HomePageHeading} headerPrimaryContentProps={headerPrimaryContentProps} AppHeaderProps={AppHeaderProps} location={this.props.location}>
        <Segment style={{ padding: '4em 0em' }} vertical>
          <CompletedTendor />
        </Segment>
      </ResponsiveContainer>
    )
  }
}
export default ClientHome
