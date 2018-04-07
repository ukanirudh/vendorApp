import React, { Component } from 'react';
import { Container, Grid, Header, Button, Pagination } from 'semantic-ui-react'
import { ResponsiveContainer, CreateBrowserHistory } from '../../../commonComponents'
import TopThreeBidsListItem from './TopThreeBidsListItem'

const AppHeaderProps = {
  'headerRightActionText': 'Profile',
  'headerRightAction': () => {
    CreateBrowserHistory.push({
      pathname: "/client/Profile"
    })
  },
}

class TopThreeBids extends Component {

  componentWillMount() {
    this.setState({ tenders:[], isLoading: false })
  }

  componentDidMount() {
    const {tenderId:tenderId} = this.props
    this.setState({isLoading:true})
    const { getTopThreeBidsDispatch } = this.props
    getTopThreeBidsDispatch(tenderId)
  }

  componentWillReceiveProps (newProps) {
    const { top_three_bids, isLoading } = newProps
    this.setState({ tenders:top_three_bids, isLoading })
  }


  render() {
    const {tenders=[]} = this.state
    var items = [];
    tenders.map((tender, i) => items.push( <TopThreeBidsListItem {...tender} key={i} /> ))

    return (
      <ResponsiveContainer AppHeaderProps={AppHeaderProps} location={'/client'}>
        <div>
          <Header
            as='h2'
            content='Top Three Bids'
            style={{
              fontSize: '1.7em',
              fontWeight: 'normal',
              marginTop: '1.5em',
            }}
          />
          <Container>
            <Grid columns={4}>
              <Grid.Row>
                {items}
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </ResponsiveContainer>
    );
  }
}

export default TopThreeBids;
