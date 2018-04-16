import React, {Component} from 'react'
import { Segment, Header, Button, Statistic, Input, Label, Icon, Grid, List } from 'semantic-ui-react'
import TenderBasicDetailsTemplate from './TenderBasicDetailsTemplate'
import { ResponsiveContainer, CreateBrowserHistory } from '../../../commonComponents'

const AppHeaderProps = {
  'headerRightActionText': 'Profile',
  'headerRightAction': () => {
     CreateBrowserHistory.push({
      pathname: "/vendor/Profile"
    })
  }
}

class TenderBidDetailsComp extends Component {

  componentWillMount () {
    this.setState({visible: false, tenderDetails: {}, otherDetails: {}, bidValue:'', postBidSuccess: false})
  }

  componentDidMount() {
    const {computedMatch:{params}} = this.props
    const bidId = params.id
    const { getTenderBidDetailsDispatch } = this.props
    getTenderBidDetailsDispatch(bidId)
  }

  componentWillReceiveProps(nextProps) {
    const {tender_details, post_bid} = nextProps
    //console.log(nextProps)
    const {tender, position, attemptsRemaining, value} = tender_details
    this.setState({tenderDetails: tender, otherDetails: {position, attemptsRemaining, value}, bidValue: value})
  }

  placeBid = () => {
    const {computedMatch:{params}} = this.props
    const {tenderDetails: {id}} = this.state
    var data = {bidId: params.id, value: this.state.bidValue, tenderId: id}
    this.props.postBidDispatch('PUT', data)
  }

  onBidChange = (event, data) => {
    const {value} = data
    this.setState({bidValue: value})
  }

  render () {
    const {tenderDetails, otherDetails, bidValue} = this.state
    const {quantity='', tenderEnds='', sub_category=''} = tenderDetails
    const {position, attemptsRemaining, value} = otherDetails
    const subCategoryName = sub_category ? sub_category.name : ''
    return (
      <ResponsiveContainer AppHeaderProps={AppHeaderProps} location={'/vendor'} >
        <Segment textAlign='center'>
          <Header as='h2'> Tender Details
            {position && <Statistic floated='right'>
              <Statistic.Value> <Icon name='star' /> {position} </Statistic.Value>
              <Statistic.Label>Rank</Statistic.Label>
            </Statistic>}
          </Header>
          <Grid divided>
            <Grid.Row>
              <Grid.Column  width={5}>
                <Header as='h2'> Details uploaded by Client </Header>
                <List size={'huge'}>
                  <List.Item> <Icon name='check' color='green' /> Bank Statement  </List.Item>
                  <List.Item> <Icon name='close' color='red' /> New York, NY </List.Item>
                  <List.Item> <Icon name='check' color='green' /> Semantic UI2  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={11}>
                <Header as='h2'> Requirement Details </Header>
                {TenderBasicDetailsTemplate({material: subCategoryName, quantity, description: 'Description', elapses_in: tenderEnds})}
                {attemptsRemaining >= 1 ?
                  <div style={{marginTop:20}}>
                    <Header as='h3'>Your previous Bid value is : Rs {value}</Header>
                    <Header as='h3'>You can still update your Bid</Header>
                    <Input name='bid' onChange={this.onBidChange} style={{marginTop: 10}} type='number' placeholder='Search...'>
                      <Button onClick={this.placeBid} labelPosition='left' icon='cart' color='teal' content='Update your new Bid'/>
                      <input type='number' value={bidValue}/>
                    </Input>
                  </div> :
                  <Header as='h3'>Your Final Bid value is : Rs {value}</Header>
                }
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </ResponsiveContainer>
    )
  }
}


export default TenderBidDetailsComp
