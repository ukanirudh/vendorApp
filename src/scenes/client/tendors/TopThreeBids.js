import React, { Component } from 'react';
import {Container, Grid} from 'semantic-ui-react'
import TopThreeBidsListItem from './TopThreeBidsListItem'

class TopThreeBids extends Component {
  componentWillMount() {
    this.setState({ topBids:[] })
  }

  componentDidMount() {
    const {getTopThreeBidsDispatch, tenderId} = this.props
    getTopThreeBidsDispatch(tenderId)
  }

  componentWillReceiveProps (newProps) {
    const { top_three_bids } = newProps
    this.setState({ topBids: top_three_bids })
  }

  render() {
    const {topBids=[]} = this.state
    var items = [];
    topBids.map((topBid, i) => items.push( <TopThreeBidsListItem {...topBid} key={i} /> ))

    return (
      <Container>
        <Grid>
          <Grid.Row stretched> {items} </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default TopThreeBids;
