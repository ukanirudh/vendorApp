import React, { Component } from 'react';
import { Segment, Grid, Header, Button } from 'semantic-ui-react'
import { CreateBrowserHistory } from '../../../commonComponents'
import TenderListItem from '../tendors/TenderListItem'

class YourTendors extends Component {

  componentWillMount() {
    this.setState({ tenders:[], isLoading: false })
  }

  componentDidMount() {
    this.setState({isLoading:true})
    this.props.getClientAllTendorsDispatch()
  }

  componentWillReceiveProps (newProps) {
    const { all_client_tendors, isLoading } = newProps
    this.setState({ tenders:all_client_tendors, isLoading })
  }

  showAllTenders = () => {
    CreateBrowserHistory.push({
      pathname: "/client/yourTendors"
    })
  }

  render() {
    const {tenders=[]} = this.state
    var items = [];
    tenders.slice(0,3).map((tender, i) => items.push( <TenderListItem {...tender} key={i} /> ))

    return (
      <Segment className='dashboard-bids-container'>
        <Header as='h2' textAlign='center'>
          Your TENDERS
        </Header>
        <Grid container centered doubling columns={3}>
          <Grid.Row>
            {items}
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Column floated='right' width={5}>
            <Button onClick={this.showAllTenders}> Show All </Button>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default YourTendors;
