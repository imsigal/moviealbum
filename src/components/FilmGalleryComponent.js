import React, { Component } from 'react';
 
import Film from '../model/Film'
import FilmComponent from './FilmComponent'


import {Accordion ,Container, Jumbotron} from 'react-bootstrap';

export default class FilmGalleryComponent extends Component {

    constructor(props) {
        super(props);
  
        this.state = {
            films:[]
        }
       
    }

    componentDidMount() {
   
        var someFilm=[new Film("xxx",90,"jhon Doe","https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SY1000_CR0,0,675,1000_AL_.jpg","all the actors here"),new Film("stam",120,"test me","https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SY1000_CR0,0,675,1000_AL_.jpg","all the actors here")]; 
        this.setState({
            films: someFilm.map(item => new Film(item))
          })

     }

    render()
    {
        const {films}=this.state;

        if (films === null) {
            return false;
        }

        var filmsItems=films.map((aFilm,index) => <FilmComponent film={aFilm} index={index} ></FilmComponent>);
                
        return (
                   
            <Container>
                <Jumbotron>Film List</Jumbotron>
                <Accordion>
                    {filmsItems}    
                </Accordion>
            </Container>
            
        )
    }
}
