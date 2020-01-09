
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './ActorComponent.css';

//ActorComponent
// this component is used to show an actor . its photo and details about him
//properties 
//-actor - accept actor object

export default class ActorComponent extends Component {

    constructor(props) {
        super(props);      
    }

    onSelectActor=(event)=>
    {
           let actorName=event.currentTarget.attributes[0].value;
           this.props.onSelectedActor(actorName);
           
    }
   
   
    render()
    {
      const { actor } = this.props;
      let actorName= actor.firstName +" " +actor.lastName;
        return (
            <Card className="actor-component-card" border="info" bg="info" text="white" value={actorName} onClick={this.onSelectActor} >     
              <Card.Img variant="top" src={actor.imgSrc} >
              </Card.Img>
              <Card.Body>
                <Card.Title> 
                  <a className="App-link" href={actor.imDBLink} target="_blank" rel="noopener noreferrer">
                    {actorName}
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
