import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

import { ResponsiveContainer, CreateBrowserHistory, HomePageHeading } from '../../commonComponents'
import CompletedTendor from './homePageComponents/CompletedTendor'
import YourTendors from './homePageComponents/YourTendors'

const AppHeaderProps = {
  'headerRightActionText': 'Profile',
  'headerRightAction': () => {
     CreateBrowserHistory.push({
      pathname: "/client/Profile"
    })
 }

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
          <YourTendors {...this.props} />
        </Segment>
        <Segment style={{ padding: '4em 0em' }} vertical>
          <CompletedTendor />
        </Segment>
      </ResponsiveContainer>
    )
  }
}
export default ClientHome
