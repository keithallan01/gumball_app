import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import faker from 'faker'; 

const CardTopHotComponet = () => {
    return ( 
        <div className="cardlisting container">
        <Card >
        <img width="100%" src={faker.image.avatar()} alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the </CardText>
          <CardTitle>Card title</CardTitle>
        </CardBody>
        </Card>
      </div> 
     );
}
 
export default CardTopHotComponet;