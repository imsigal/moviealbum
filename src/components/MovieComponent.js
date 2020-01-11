import React, { Component } from 'react';
import { Card,Accordion, Jumbotron,Container} from 'react-bootstrap';
import './MovieComponent.css';

//MovieComponent
// this component is used to show a movie . its photo and details about it
//properties 
//-movie - accept Movie object

export default class MovieComponent extends Component {

    
    render()
    {
      const { movie, index} = this.props;
        return (
            <Card className="movie-component-main" >
                <Card.Header>
                <Accordion.Toggle as={Card.Header} eventKey={index}>
                    {movie.name}
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={index}>
                    <Card.Body className="movie-component-container-class">

                         <img src={movie.imgSrcPoster} alt={movie.name} />
                        <Container>
                            <Jumbotron ><h5>{movie.name} </h5></Jumbotron>
                            <h5>Directed by: </h5> 
                              <h6>   {movie.director} </h6> 
                            <h5>Actors: </h5> 
                            <h6> {movie.starActors}</h6>
                        </Container> 

                    </Card.Body>
                </Accordion.Collapse>
          </Card>
     
        );
    }
}
