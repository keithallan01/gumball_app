import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import faker from 'faker';   


const CardListingComponet = () => {
    return ( <div className="cardlisting container">
        <Card className="CardListing">
          <CardImg top width="100%" src={faker.image.avatar()} />
          <CardBody>
            <CardTitle>Listing name</CardTitle>
            <CardSubtitle>price</CardSubtitle>
          </CardBody>
        </Card>
      </div> );
}
 
export default CardListingComponet;
