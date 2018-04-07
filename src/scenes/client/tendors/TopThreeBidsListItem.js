import React from 'react'
import { Grid, Card, Button } from 'semantic-ui-react'

const TopThreeBidsListItem = (props) => {
  const {id, value, position,attemptsRemaining,tenderId,vendorId,createdAt,updatedAt} = props
  let name=''
  if(position) {
    name = position
  }
  return (
    <Grid.Column style={{marginBottom:15}}>
      <Card>
        <Card.Content>
          <Card.Header>
            {name}
          </Card.Header>
          <Card.Meta>
            <div className="track" >
              <p className="title">TENDERID : {tenderId}</p>
              <p className="title">VALUE : {value}</p>
              <p className="title">ATTEMPTS REMAINING : {attemptsRemaining}</p>
              <p className="title">INITIAL BID AT: {createdAt}</p>
              <p className="title">LAST MODIFIED AT: {updatedAt}</p>
            </div>
          </Card.Meta>
        </Card.Content>
        
      </Card>
    </Grid.Column>
  )
}

export default TopThreeBidsListItem;
