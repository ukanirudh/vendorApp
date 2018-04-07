import React from 'react'
import { Grid, Card, Statistic, Icon } from 'semantic-ui-react'
import { CreateBrowserHistory } from '../../../commonComponents'

const TenderListItem = (props) => {
  const {sub_category, quantity, tenderEnds, id, otherDetails, isTypeBid} = props
  const {position='', bidId} = otherDetails ? otherDetails : {}
  const name = sub_category ? sub_category.name : ''
  const tenderDetailsUrl = (isTypeBid) ? `/vendor/tender_bids/${bidId}` : `/vendor/tender/${id}`
  return (
    <Grid.Column style={{marginBottom:15}}>
      <Card onClick={() => CreateBrowserHistory.push({pathname: tenderDetailsUrl})}  title='View Details'>
        <Card.Content>
          {position && <Statistic floated='right'>
            <Statistic.Value> <Icon name='star' /> {position} </Statistic.Value>
            <Statistic.Label>Rank</Statistic.Label>
          </Statistic>}
          <Card.Header>
            {name}
          </Card.Header>
          <Card.Meta>
            <div className="track" >
              <p className="title">Quantity: {quantity}</p>
              <p className="title">Tender Duration : {tenderEnds}</p>
            </div>
          </Card.Meta>
          <Card.Description>
            This tender elapses in {tenderEnds} days
          </Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}

export default TenderListItem
