import React, { Component } from 'react'
import {Segment} from 'semantic-ui-react'

import RecentBids from './bids/RecentBids'
import CompletedBids from './bids/CompletedBids'

import { ResponsiveContainer, CreateBrowserHistory, HomePageHeading } from '../../commonComponents'

const AppHeaderProps = {
  'headerRightActionText': 'Profile',
  'headerRightAction': () => {
     CreateBrowserHistory.push({
      pathname: "/vendor/Profile"
    })
  }
}

const headerPrimaryContentProps = {
  'headerText':'We bring to you all the tenders for the categories you have registered for.',
  'primaryActionText':'Get Started',
  'primaryActionRoute':() => {
    CreateBrowserHistory.push({
      pathname: "/vendor/tenderlist"
    })
  }
}

class VendorHome extends Component {
  render() {
    return (
      <ResponsiveContainer HomePageHeading={HomePageHeading} headerPrimaryContentProps={headerPrimaryContentProps} AppHeaderProps={AppHeaderProps} location={this.props.location} >
        <Segment style={{ padding: '4em 0em' }} vertical>
          <RecentBids {...this.props} />
          <CompletedBids {...this.props} />
        </Segment>
      </ResponsiveContainer>
    )
  }
}
export default VendorHome
