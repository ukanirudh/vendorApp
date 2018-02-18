import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Container, Grid, Header } from 'semantic-ui-react'
import axios from 'axios';

const api = {
    baseUrl: 'https://api.soundcloud.com',
    client_id: 'caf73ef1e709f839664ab82bef40fa96'
};

class AllCategoryTenders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null
        };
    }

    loadItems(page) {
        var self = this;

        var url = api.baseUrl + '/users/8665091/favorites';
        if(this.state.nextHref) {
            url = this.state.nextHref;
        }

        axios({
                method:'GET',
                url:url,
                params: {
                  client_id: api.client_id,
                  linked_partitioning: 1,
                  page_size: 10
                }
            })
            .then(function(resp) {
              //console.log(resp.data)
                if(resp.data) {
                    var tracks = self.state.tracks;
                    resp.data.collection.map((track) => {
                        if(track.artwork_url == null) {
                            track.artwork_url = track.user.avatar_url;
                        }

                        return tracks.push(track);
                    });

                    if(resp.data.next_href) {
                        self.setState({
                            tracks: tracks,
                            nextHref: resp.data.next_href
                        });
                    } else {
                        self.setState({
                            hasMoreItems: false
                        });
                    }
                }
            });
    }

    render() {
        const loader = <div key={0} className="loader">Loading ...</div>;

        var items = [];
        this.state.tracks.map((track, i) => {
            return items.push(
              <Grid.Column key={i}>
                <div className="track" >
                    <a href={track.permalink_url} target="_blank">
                        <img src={track.artwork_url} alt='not found' width="150" height="150" />
                        <p className="title">{track.title}</p>
                    </a>
                </div>
              </Grid.Column>
            );
        });

        return (
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
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={loader}>

                <Container>
                  <Grid columns={4} divided>
                    <Grid.Row>
                      {items}
                    </Grid.Row>
                  </Grid>
                </Container>
            </InfiniteScroll>
          </div>
        );
    }
}

export default AllCategoryTenders;
