import React, { Component } from 'react';
import { Grid, Card, Button, Segment, Header } from 'semantic-ui-react'
import TenderListItem from './TenderListItem'

class RecentBids extends Component {
  render() {
    const {tenders} = this.props
    var items = [];
    tenders.map((tenderDetails, i) => items.push( <TenderListItem {...tenderDetails.tender} key={i} /> ))
    return (
      <Segment className='dashboard-bids-container'>
        <Header as='h2' textAlign='center'>
          3 MOST RECENT BIDS
        </Header>
        <Grid container centered doubling columns={3}>
          {items}
        </Grid>
      </Segment>
    );
  }
}

export default RecentBids;
