import React, { Component } from 'react';
import { ResponsiveContainer, CreateBrowserHistory } from '../../../commonComponents'
import { Container, Grid, Header, Card,
  Button, Pagination, Dimmer, Loader, Segment } from 'semantic-ui-react'

const AppHeaderProps = {
  'headerRightActionText': 'Profile',
  'headerRightAction': () => {
    // CreateBrowserHistory.push({
    //   pathname: "/authorization"
    // })
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
    const { props } = this.props
    this.setState({isLoading:true})
    props.getAllSubscribedTendersDispatch(4)
  }

  componentWillReceiveProps (newProps) {
    const { props } = newProps
    const { subscribed_category_tenders, isLoading } = props
    this.setState({ categoryTenders:subscribed_category_tenders, isLoading })
  }

  render() {
    const {categoryTenders=[]} = this.state
    var items = [];
    categoryTenders.map((tender, i) => {
      const sub_category = tender.sub_category
      let name=''
      if(sub_category) {
        name = sub_category.name
      }
      return items.push(
        <Grid.Column key={i} style={{marginBottom:15}}>
          <Card>
            <Card.Content>
              <Card.Header>
                {name}
              </Card.Header>
              <Card.Meta>
                <div className="track" >
                  <p className="title">Quantity: {tender.quantity}</p>
                  <p className="title">Tender Duration : {tender.tenderEnds}</p>
                </div>
              </Card.Meta>
              <Card.Description>
                This tender elapses in {tender.tenderEnds} days
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>Accept</Button>
                <Button basic color='red'>Decline</Button>
              </div>
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    });
    
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
