import React, { Component } from 'react';
import { ResponsiveContainer, CreateBrowserHistory } from '../../../commonComponents'
import { Container, Grid, Header, Card,
  Button, Pagination, Dimmer, Loader, Segment } from 'semantic-ui-react'
import TenderListItem from './TenderListItem'

const AppHeaderProps = {
  'headerRightActionText': 'Profile',
  'headerRightAction': () => {
    CreateBrowserHistory.push({
      pathname: "/profile"
    })
  },
}

class AllCategoryTenders extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({ categoryTenders:[], isLoading: false })
  }

  componentDidMount() {
    const { getAllSubscribedTendersDispatch } = this.props
    this.setState({isLoading:true})
    getAllSubscribedTendersDispatch(3)
  }

  componentWillReceiveProps (newProps) {
    const { subscribed_category_tenders, isLoading } = newProps
    this.setState({ categoryTenders:subscribed_category_tenders, isLoading })
  }

  render() {
    const {categoryTenders=[]} = this.state
    var items = [];
    categoryTenders.map((tender, i) => items.push( <TenderListItem {...tender} key={i} /> ))

    return (
    <ResponsiveContainer AppHeaderProps={AppHeaderProps} location={this.props.location} >
      <Segment>
        <Header
          as='h2'
          content='All Potential Tenders.'
          style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginTop: '1.5em',
          }}
        />
        <Dimmer active={this.state.isLoading}>
          <Loader indeterminate>Loading the Tenders</Loader>
        </Dimmer>
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
          totalPages={3} />
      </Segment>
    </ResponsiveContainer>
    );
  }
}

export default AllCategoryTenders;
