import React from 'react'
import { Grid, Statistic, Segment, Icon } from 'semantic-ui-react'

const iconsMap = {
  '1': 'pointing up',
  '2': 'hand peace',
  '3': 'hand lizard',
}

const TopThreeBidsListItem = (props) => {
  const {value, position} = props
  return (
    <Grid.Column style={{marginBottom:10}}>
      <Segment>
        <Statistic color='red' inverted size='mini' style={{float: 'left'}}>
          <Statistic.Value><Icon name={iconsMap[position]} /></Statistic.Value>
        </Statistic>
        <Statistic color='red' inverted size='mini'>
          <Statistic.Value><Icon name='inr' />{value}</Statistic.Value>
        </Statistic>
      </Segment>
    </Grid.Column>
  )
}

export default TopThreeBidsListItem;
