import React, { Component } from 'react';
import { Card,Accordion,Button } from 'react-bootstrap';
// import './ActorGalleryComponent.css';

//FilmComponent
// this component is used to show a film . its photo and details about it
//properties 
//-film - accept Film object

export default class FilmComponent extends Component {

    constructor(props) {
        super(props);      
    }

   
    render()
    {
      const { film } = this.props;
      var name=film.name;
        return (
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    {film.name}
                    </Accordion.Toggle>
                </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>{film.director}</Card.Body>
                    </Accordion.Collapse>
          </Card>
     
        );
    }
}
