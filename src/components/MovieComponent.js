import React, { Component } from 'react';
import { Card,Accordion,Button, Jumbotron,Container} from 'react-bootstrap';
import './MovieComponent.css';

//MovieComponent
// this component is used to show a movie . its photo and details about it
//properties 
//-movie - accept Movie object

export default class MovieComponent extends Component {

    constructor(props) {
        super(props);      
    }

    
    render()
    {
      const { movie, index} = this.props;
        return (
            <Card >
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                    {movie.name}
                    </Accordion.Toggle>
                </Card.Header>
                    <Accordion.Collapse eventKey={index}>
                    <Card.Body className="movie-component-container-class">

                         <img src={movie.imgSrcPoster} alt={movie.name} />
                        <Container>
                            <Jumbotron ><h5>{movie.name} </h5></Jumbotron>
                            <h5>The movie was directed by:  {movie.director} </h5> 
                            <h5>Actors: {movie.starActors} </h5> 
                        </Container> 

                    </Card.Body>
                    </Accordion.Collapse>
          </Card>
     
        );
    }
}