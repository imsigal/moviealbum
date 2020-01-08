import React, { Component } from 'react';
import { Card,Accordion,Button} from 'react-bootstrap';
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
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                    {film.name}
                    </Accordion.Toggle>
                </Card.Header>
                    <Accordion.Collapse eventKey={index}>
                    <Card.Body className="container-class">

                         <img src={film.imgSrcPoster} alt={film.name} />
                        <div>
                            <p>Film Details:</p>
                            <p>The film was directed by  {film.director}</p>
                            <p>actors: {film.starActors}</p>
                        </div> 

                    </Card.Body>
                    </Accordion.Collapse>
          </Card>
     
        );
    }
}
