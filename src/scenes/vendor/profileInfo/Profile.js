import React, { Component } from 'react'
import { Tab, Header } from 'semantic-ui-react'
import BasicInfo from './BasicInfo.js'
import BankDetails from './BankDetails.js'
import { ResponsiveContainer, CreateBrowserHistory } from '../../../commonComponents'

const AppHeaderProps = {
  'headerRightActionText': 'Profile',
  'headerRightAction': () => {
     CreateBrowserHistory.push({
      pathname: "/vendor/Profile"
    })
  },
}

const profileComponentMap = {
  'BasicInfo' : BasicInfo,
  'BankDetails' : BankDetails,
}

class Profile extends Component {

  getTabPaneContent = (profileComponent) => {
    const RenderedComponent = profileComponentMap[profileComponent]
    return <RenderedComponent {...this.props} />
  }

  getTabPanes = () => {
    const panes = [
      { menuItem: 'BASIC INFO', render: () => <Tab.Pane> {this.getTabPaneContent('BasicInfo')} </Tab.Pane> },
      { menuItem: 'BANK DETAILS', render: () => <Tab.Pane> {this.getTabPaneContent('BankDetails')} </Tab.Pane> }
    ]
    return panes
  }

  render() {
    return (
      <ResponsiveContainer  AppHeaderProps={AppHeaderProps} location={'/vendor'}>
        <Header as='h2' color='teal' textAlign='center'> PROFILE INFO </Header>
        <Tab panes={this.getTabPanes()} />
      </ResponsiveContainer>
    )
  }
}

export default Profile
