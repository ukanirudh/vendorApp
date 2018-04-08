import React from 'react'
import {forEach} from 'lodash'
import { Grid } from 'semantic-ui-react'
import TenderDetailsFeilds from '../constants/tender-basic-details'

const TenderBasicDetailsTemplate = (props) => {
  var items = []
  forEach(props, (tenderFieldValue, tenderFieldKey) => {
    items.push(
      <Grid.Row key={tenderFieldKey}>
        <Grid.Column width={5}> {TenderDetailsFeilds[tenderFieldKey].label} </Grid.Column>
        <Grid.Column width={5}> {tenderFieldValue} </Grid.Column>
      </Grid.Row>
    )
  })
  return (
    <Grid>
      {items}
    </Grid>
  )
}

export default TenderBasicDetailsTemplate
