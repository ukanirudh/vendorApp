import React, { Component } from 'react';
import { Container, Grid, Header, Button, Pagination } from 'semantic-ui-react'
import { ResponsiveContainer, CreateBrowserHistory } from '../../../commonComponents'
import TenderListItem from './TenderListItem'

const AppHeaderProps = {
  'headerRightActionText': 'Profile',
  'headerRightAction': () => {
    CreateBrowserHistory.push({
      pathname: "/client/Profile"
    })
  },
}

class YourTendors extends Component {

  componentWillMount() {
    this.setState({ tenders:[], isLoading: false })
  }

  componentDidMount() {
    const { getClientAllTendorsDispatch } = this.props
    this.setState({isLoading:true})
    getClientAllTendorsDispatch()
  }

  componentWillReceiveProps (newProps) {
    const { all_client_tendors, isLoading } = newProps
    this.setState({ tenders:all_client_tendors, isLoading })
  }


  render() {
    const {tenders=[]} = this.state
    var items = [];
    tenders.map((tender, i) => items.push( <TenderListItem {...tender} key={i} /> ))

    return (
      <ResponsiveContainer AppHeaderProps={AppHeaderProps} location={this.props.location}>
        <div>
          <Header
            as='h2'
            content='All Potential Tenders.'
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
          <Pagination
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            totalPages={3}
          />
        </div>
      </ResponsiveContainer>
    );
  }
}

export default YourTendors;
