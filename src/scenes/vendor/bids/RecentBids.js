import React, { Component } from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react'
import TenderListItem from './TenderListItem'
import noItemsContent from '../../../commonUsageComponents/NoItemsDisplay'

class RecentBids extends Component {
  render() {
    const {tenders} = this.props
    var items = [];
    tenders.map((tenderDetails, i) => {
      const {value, position, attemptsRemaining, id} = tenderDetails
      const otherDetails = {position, value, attemptsRemaining, bidId: id}
      items.push( <TenderListItem {...tenderDetails.tender} otherDetails={otherDetails} isTypeBid key={i} /> )
      return items
    })
    return (
      <Segment className='dashboard-bids-container'>
        <Header as='h2' textAlign='center' className='list-page-header'> 3 MOST RECENT BIDS </Header>
        <Grid container centered doubling columns={3}> {items.length ? items : noItemsContent()} </Grid>
      </Segment>
    );
  }
}

export default RecentBids;
