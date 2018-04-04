import React from 'react'
import { Grid, Card, Button } from 'semantic-ui-react'
import { CreateBrowserHistory } from '../../../commonComponents'

const viewTenderDetails = (tenderId) => {
  CreateBrowserHistory.push({
   pathname: `/client/tenderDetails/${tenderId}`
  })
}

const TenderListItem = (props) => {
  const {sub_category, quantity, tenderEnds, id} = props
  let name=''
  if(sub_category) {
    name = sub_category.name
  }
  return (
    <Grid.Column style={{marginBottom:15}}>
      <Card>
        <Card.Content>
          <Card.Header> {name} </Card.Header>
          <Card.Meta>
            <div className="track" >
              <p className="title">Quantity: {quantity}</p>
              <p className="title">Tender Duration : {tenderEnds}</p>
            </div>
          </Card.Meta>
          <Card.Description> This tender elapses in {tenderEnds} days </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green' fluid onClick={() => viewTenderDetails(id)}>View Details</Button>
          </div>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}

export default TenderListItem
