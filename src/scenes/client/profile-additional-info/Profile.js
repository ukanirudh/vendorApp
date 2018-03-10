
import React, { Component } from 'react'
import { Container, Grid, Header, List, Segment,Tab } from 'semantic-ui-react'
import BasicInfo from './BasicInfo.js'
import BankDetails from './BankDetails.js'
import { ResponsiveContainer, CreateBrowserHistory, HomePageHeading } from '../../../commonComponents'										   

const AppHeaderProps = {
  'headerRightActionText': 'Profile',
  'headerRightAction': () => {
     CreateBrowserHistory.push({
      pathname: "/client/Profile"
    })
  },
}

class Profile extends Component {

constructor(props){
      super(props);
  }
componentDidMount(){
    
  }

 getTabPanes = () => {
 	const panes = [
  { menuItem: 'BASIC INFO', render: () => <Tab.Pane> 
											  <Segment style={{ padding: '1em 0em' }} vertical>
											        <BasicInfo {...this.props} /> 
											   </Segment>
										   </Tab.Pane> },
  { menuItem: 'BANK DETAILS', render: () => <Tab.Pane> 
											  <Segment style={{ padding: '1em 0em' }} vertical>
											        <BankDetails {...this.props} /> 
											   </Segment>
										   </Tab.Pane> } ]
	return panes									   
 } 

render() {
	const { props } = this.props;
	console.log(this.props)
	const {current_user} = props
    return (
      <ResponsiveContainer  AppHeaderProps={AppHeaderProps} location={this.props.location}>
        <div style={{ padding: '1em 0em' }} vertical>
         PROFILE INFO
         </div>
        <Segment style={{ padding: '0em 0em' }} vertical>
           <Tab panes={this.getTabPanes()} />
        </Segment>
      </ResponsiveContainer>
    )
  }
}
export default Profile
