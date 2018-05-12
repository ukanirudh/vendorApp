import React, { Component } from 'react';
import { Segment, Grid, Header, Button } from 'semantic-ui-react'
import { CreateBrowserHistory } from '../../../commonComponents'
import noItemsContent from '../../../commonUsageComponents/NoItemsDisplay'
import TenderListItem from '../tendors/TenderListItem'

class YourTendors extends Component {

  componentWillMount() {
    this.setState({ tenders:[] })
  }

  componentDidMount() {
    this.props.getClientAllTendorsDispatch({page: 1})
  }

  componentWillReceiveProps (newProps) {
    const { all_client_tendors } = newProps
    this.setState({ tenders:all_client_tendors })
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
        <Header as='h2' textAlign='center'> Your TENDERS </Header>
        <Grid container centered doubling columns={3}>
          <Grid.Row > {items.length ? items : noItemsContent()} </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Column floated='right' width={5}>
            {items.length ? <Button onClick={this.showAllTenders}> Show All </Button> : ''}
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default YourTendors;
