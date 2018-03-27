import React, {Component} from 'react'
import { Segment, Header, Card, Button, Statistic, Input,
   Icon, Grid, List, Transition } from 'semantic-ui-react'
import TenderBasicDetailsTemplate from './TenderBasicDetailsTemplate'
import { CreateBrowserHistory } from '../../../commonComponents'

class TenderDetails extends Component {

  componentWillMount () {
    this.setState({visible: false, tenderDetails: {}, bidValue:'', postBidSuccess: false})
  }

  componentDidMount() {
    const {computedMatch:{params}} = this.props
    const tenderId = params.id
    const { getTenderDetailsDispatch } = this.props
    getTenderDetailsDispatch(tenderId)
  }

  componentWillReceiveProps(nextProps) {
    const {tender_details, post_bid} = nextProps
    if(post_bid) {
      CreateBrowserHistory.push({
       pathname: "/vendor"
     })
    }
    this.setState({tenderDetails: tender_details})
  }

  placeBid = () => {
    const {computedMatch:{params}} = this.props
    var data = {tenderId: params.id, value: this.state.bidValue}
    this.props.postBidDispatch(data)
  }

  onBidChange = (event, data) => {
    const {name, value} = data
    this.setState({bidValue: value})
  }

  handleVisibility = () => this.setState({ visible: !this.state.visible })

  render () {
    const {tenderDetails} = this.state
    const {quantity='', tenderEnds='', rank} = tenderDetails
    return (
      <Segment textAlign='center' style={{marginBottom:15}}>
        <Header as='h2'> Tender Details
          {rank && <Statistic floated='right'>
            <Statistic.Value> <Icon name='star' /> 5 </Statistic.Value>
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
              {TenderBasicDetailsTemplate({material: 'Sand', quantity, description: 'Description', elapses_in: tenderEnds})}
              <Transition.Group animation={'fade left'} duration={500}>
                {!this.state.visible &&
                  <Grid centered columns={2}>
                    <Grid.Column>
                      <Button onClick={this.handleVisibility} style={{marginTop:20}} primary> Place Bid </Button>
                    </Grid.Column>
                  </Grid>
                  }
              </Transition.Group>
              <Transition.Group animation={'fade right'} duration={500}>
                {this.state.visible &&
                  <div style={{marginTop:20}}>
                    <Input name='bid' onChange={this.onBidChange} style={{marginTop: 10}} type='text' placeholder='Search...' action>
                      <Button onClick={this.placeBid} labelPosition='left' icon='cart' color='teal' content='Place it'/>
                      <input type='number' />
                      <Button onClick={this.handleVisibility} icon='remove circle' color='red' />
                    </Input>
                  </div>
                }
              </Transition.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}


export default TenderDetails
