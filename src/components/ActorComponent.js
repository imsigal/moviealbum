
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './ActorGalleryComponent.css';

//ActorComponent
// this component is used to show an actor . its photo and details about him
//properties 
//-actor - accept actor object

export default class ActorComponent extends Component {

    constructor(props) {
        super(props);      
    }

   
    render()
    {
      const { actor } = this.props;
        return (
            <Card className="card-class" border="info" bg="info" text="white" >     
              <Card.Img variant="top" src={actor.imgSrc} >
              </Card.Img>
              <Card.Body>
                <Card.Title> 
                  <a className="App-link" href={actor.imDBLink} target="_blank" rel="noopener noreferrer">
                    {actor.firstName} {actor.lastName}
                  </a>
                </Card.Title>
                <Card.Text>
                  age is: {actor.getAge().toString()}
                </Card.Text>

              </Card.Body>
          </Card>
     
        );
    }
}
