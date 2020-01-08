import React, { Component } from 'react';
import { Card,Accordion,Button, Jumbotron,Container} from 'react-bootstrap';
import './FilmComponent.css';

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
      const { film, index} = this.props;
        return (
            <Card >
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                    {film.name}
                    </Accordion.Toggle>
                </Card.Header>
                    <Accordion.Collapse eventKey={index}>
                    <Card.Body className="container-class">

                         <img src={film.imgSrcPoster} alt={film.name} />
                        <Container>
                            <Jumbotron ><h5>{film.name} Details:</h5></Jumbotron>
                            <h5>The film was directed by:  {film.director} </h5> 
                            <h5>Actors: {film.starActors} </h5> 
                        </Container> 

                    </Card.Body>
                    </Accordion.Collapse>
          </Card>
     
        );
    }
}
