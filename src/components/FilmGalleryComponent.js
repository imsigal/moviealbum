import React, { Component } from 'react';
 
import Film from '../model/Film'
import FilmComponent from './FilmComponent'
// import ActorsData from "../data/actors.json"

import {Accordion ,Container} from 'react-bootstrap';

export default class FilmGalleryComponent extends Component {

    constructor(props) {
        super(props);
  // sigal - change the actors data
 // ActorsData.map(item => new Film(item))  
        this.state = {
            films:[]
        }
       
    }

    componentDidMount() {
    //     const p = axios.get("cars.json");
        
    //     p.then((response) => {
    //       this.setState({
    //         cars: response.data.map(plainCar => new CarModel(plainCar))
    //       })
    //     })
        var someFilm=[new Film("xxx",90,"jhon Doe"),new Film("stam",120,"test me")]; 
        this.setState({
            films: someFilm.map(item => new Film(item))
          })

     }

    render()
    {
        const {films}=this.state;

        // if (films === null) {
        //     return false;
        // }

        var filmsItems=films.map((aFilm,index) => <FilmComponent film={aFilm} ></FilmComponent>);
                
        return (
                   
            <Container>
                <Accordion>
                {filmsItems}    
                {/* <FilmComponent film={films} ></FilmComponent> */}
                </Accordion>
            </Container>
            
        )
    }
}
