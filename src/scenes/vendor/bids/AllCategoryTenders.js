import React, { Component } from 'react';
import { ResponsiveContainer, CreateBrowserHistory } from '../../../commonComponents'
import { Container, Grid, Header, Pagination, Dimmer, Loader, Segment } from 'semantic-ui-react'
import TenderListItem from './TenderListItem'
import noItemsContent from '../../../commonUsageComponents/NoItemsDisplay'

const AppHeaderProps = {
  'headerRightActionText': 'Profile',
  'headerRightAction': () => {
    CreateBrowserHistory.push({
      pathname: "/vendor/Profile"
    })
  },
}

class AllCategoryTenders extends Component {
  componentWillMount() {
    this.setState({ categoryTenders:[], isLoading: false, page: 1, totalPages: 1})
  }

  componentDidMount() {
    const { getAllSubscribedTendersDispatch } = this.props
    const {page} = this.state
    this.setState({isLoading:true})
    const mainCategoryIdParam = JSON.parse(localStorage.getItem('mainCategory'))
    getAllSubscribedTendersDispatch({mainCategoryId: mainCategoryIdParam.id, page})
  }

  componentWillReceiveProps (newProps) {
    const { subscribed_category_tenders, isLoading, totalPages } = newProps
    this.setState({ categoryTenders:subscribed_category_tenders, isLoading, totalPages })
  }

  onPageChange = (event, data) => {
    const {getAllSubscribedTendersDispatch} = this.props
    const {activePage: page} = data
    const mainCategoryIdParam = JSON.parse(localStorage.getItem('mainCategory'))
    getAllSubscribedTendersDispatch({mainCategoryId: mainCategoryIdParam.id, page})
  }

  render() {
    const {categoryTenders=[]} = this.state
    var items = [];
    categoryTenders.map((tender, i) => items.push( <TenderListItem {...tender} key={i} /> ))

    return (
    <ResponsiveContainer AppHeaderProps={AppHeaderProps} location={'/vendor'} >
      <Segment>
        <Header as='h2' content='All Potential Tenders.' className='list-page-header' />
        <Dimmer active={this.state.isLoading}>
          <Loader indeterminate>Loading the Tenders</Loader>
        </Dimmer>
        <Container>
          <Grid columns={4}>
            <Grid.Row> {items.length ? items : noItemsContent()} </Grid.Row>
          </Grid>
        </Container>
        <Pagination
          defaultActivePage={1}
          firstItem={null}
          lastItem={null}
          pointing
          secondary
          onPageChange={this.onPageChange}
          totalPages={Math.ceil(this.state.totalPages/15)} />
      </Segment>
    </ResponsiveContainer>
    );
  }
}

export default AllCategoryTenders;
