import React, { Component } from 'react';
import { Grid, Card, Button, Segment, Header } from 'semantic-ui-react'

class YourTendors extends Component {
  render() {
    return (
      <Segment className='dashboard-bids-container'>
        <Header as='h2' textAlign='center'>
          CURRENT ACTIVE TENDORS
        </Header>
        <Grid container centered doubling columns={3}>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>
                  Steve Sanders
                </Card.Header>
                <Card.Meta>
                  Friends of Elliot
                </Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>Approve</Button>
                  <Button basic color='red'>Decline</Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>
                  Steve Sanders
                </Card.Header>
                <Card.Meta>
                  Friends of Elliot
                </Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>Approve</Button>
                  <Button basic color='red'>Decline</Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>
                  Steve Sanders
                </Card.Header>
                <Card.Meta>
                  Friends of Elliot
                </Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>Approve</Button>
                  <Button basic color='red'>Decline</Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column floated='right' width={5}>
            <Button> Show All </Button>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default YourTendors;
