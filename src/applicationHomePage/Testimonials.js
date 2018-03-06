import React, { Component } from 'react'
import Slider from 'react-slick'

import {
  Grid, Image, Header, Item
} from 'semantic-ui-react'
import img2 from '../assets/images/image.png'
export default class Testimonials extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '20px',
      slidesToShow: 2,
      speed: 500,
      autoplay: true,
    };
    return (
      <div>
        <Slider {...settings}>

        <Item>
          <Item.Image size='tiny' src={img2} />
          <Item.Content>
            <Item.Header> <Header as='h2'>Arrowhead Valley Camp</Header> </Item.Header>
            <Item.Meta>
              <span className='price'>$1200</span>
              <span className='stay'>1 Month</span>
            </Item.Meta>
            <Item.Description>
              <Header as='h3'>"I shouldn't have gone with their competitor."</Header>
              <b>Nan</b> Chief Fun Officer Acme Toys
            </Item.Description>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size='tiny' src={img2} />
          <Item.Content>
            <Item.Header> <Header as='h2'>Avengers Inc</Header> </Item.Header>
            <Item.Meta>
              <span className='price'>$2500</span>
              <span className='stay'>1 Month</span>
            </Item.Meta>
            <Item.Description>
              <Header as='h4'>"What a Company"</Header>
              <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
            </Item.Description>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size='tiny' src={img2} />
          <Item.Content>
            <Item.Header> <Header as='h2'>Arrowhead Valley Camp</Header> </Item.Header>
            <Item.Meta>
              <span className='price'>$1200</span>
              <span className='stay'>1 Month</span>
            </Item.Meta>
            <Item.Description>
              <Header as='h3'>"I shouldn't have gone with their competitor."</Header>
              <b>Nan</b> Chief Fun Officer Acme Toys
            </Item.Description>
          </Item.Content>
        </Item>

        </Slider>
      </div>
    );
  }
}
