import React from 'react'
import { Grid, Card, Button, Statistic, Icon, Reveal, Input } from 'semantic-ui-react'
import { CreateBrowserHistory } from '../../../commonComponents'

const TenderListItem = (props) => {
  const {sub_category, quantity, tenderEnds, id, rank} = props
  let name=''
  if(sub_category) {
    name = sub_category.name
  }
  return (
    <Grid.Column style={{marginBottom:15}}>
      <Card onClick={() => CreateBrowserHistory.push(`/vendor/tender/${id}`)}  title='View Details'>
        <Card.Content>
          {rank && <Statistic floated='right'>
            <Statistic.Value>
              <Icon name='star' />
              5
            </Statistic.Value>
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
