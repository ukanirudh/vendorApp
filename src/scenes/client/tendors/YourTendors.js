import React, { Component } from 'react';
import ResponsiveContainer from '../clientResponsiveComponents/ResponsiveContainer'
import { Container, Grid, Header, Card, Button, Pagination } from 'semantic-ui-react'
import { CreateBrowserHistory } from '../../../commonComponents'
class YourTendors extends Component {

   constructor(props) {
      super(props);
  }

  componentWillMount() {
    this.setState({ tenders:[], isLoading: false })
  }

  componentDidMount() {
    const { props } = this.props
    const currentUser = JSON.parse(localStorage.getItem('userprofile'))
    this.setState({isLoading:true})
    props.getClientAllTendorsDispatch(currentUser.id)
  }

  componentWillReceiveProps (newProps) {
    const { props } = newProps
    const { all_client_tendors, isLoading } = props
    this.setState({ tenders:all_client_tendors, isLoading })
  }


  render() {
     const {tenders=[]} = this.state

        var items = [];
        tenders.map((tender, i) => {
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
        <ResponsiveContainer>
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
