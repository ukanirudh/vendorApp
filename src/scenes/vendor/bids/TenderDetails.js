import React, {Component} from 'react'
import { Segment, Header, Card, Button, Statistic, Input,
   Icon, Grid, List, Transition } from 'semantic-ui-react'

const TenderBasicDetailsTemplate = ({material, quantity, description, elapses_in}) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={5}> Required Material </Grid.Column>
        <Grid.Column width={5}> {material} </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={5}> Required Quantity </Grid.Column>
        <Grid.Column width={5}> {quantity} </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={5}> Additional Description/specification </Grid.Column>
        <Grid.Column width={5}> {description} </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={5}> Tender elapses in </Grid.Column>
        <Grid.Column width={5}> {elapses_in} days </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
class TenderDetails extends Component {

  componentWillMount () {
    this.setState({visible: false})
  }

  componentDidMount() {
    const {computedMatch:{params}} = this.props
    const tenderId = params.id
    //const { getTenderDetailsDispatch } = this.props
    //getTenderDetailsDispatch(tenderId)
  }

  handleVisibility = () => this.setState({ visible: !this.state.visible })

  render () {
    const {sub_category, quantity, tenderEnds, rank} = this.props
    let name=''
    if(sub_category) {
      name = sub_category.name
    }
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
              {TenderBasicDetailsTemplate({material: 'Sand', quantity: '32 kgs', description: 'Description', elapses_in: 5})}
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
                    <Input style={{marginTop: 10}} type='text' placeholder='Search...' action>
                      <Button onClick={() => {console.log('here')}} labelPosition='left' icon='cart' color='teal' content='Place it'/>
                      <input />
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
