import React, {Component} from 'react'
import { Segment, Header, Button, Icon, Grid, List } from 'semantic-ui-react'
import TenderBasicDetailsTemplate from './TenderBasicDetailsTemplate'
import { ResponsiveContainer, CreateBrowserHistory } from '../../../commonComponents'

const AppHeaderProps = {
  'headerRightActionText': 'Profile',
  'headerRightAction': () => {
     CreateBrowserHistory.push({
      pathname: "/client/Profile"
    })
  }
}

class TenderDetails extends Component {
  componentWillMount () {
    this.setState({tenderDetails: {}})
  }

  componentDidMount() {
    const {computedMatch:{params}} = this.props
    const tenderId = params.id
    const { getTenderDetailsDispatch } = this.props
    getTenderDetailsDispatch(tenderId)
  }

  componentWillReceiveProps(nextProps) {
    const {tender_details} = nextProps
    this.setState({tenderDetails: tender_details})
  }

  render () {
    const {tenderDetails} = this.state
    const {quantity='', tenderEnds='', sub_category=''} = tenderDetails
    const subCategoryName = sub_category ? sub_category.name : ''
    return (
      <ResponsiveContainer AppHeaderProps={AppHeaderProps} location={'/client'} >
        <Segment textAlign='center'>
          <Header as='h2'> Tender Details </Header>
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
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </ResponsiveContainer>
    )
  }
}


export default TenderDetails
