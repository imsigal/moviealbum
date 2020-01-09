import React, { Component } from 'react';
import Axios from 'axios'
import Film from '../model/Film'
import FilmComponent from './FilmComponent'


import {Accordion ,Container, Jumbotron} from 'react-bootstrap';

// prperties :
// -selectedActor- the  actor, of whom the films will be seen
// states:
// films- the list of films that will be seen on screen
export default class FilmGalleryComponent extends Component {

    constructor(props) {
        super(props);
  
        this.state = {
            films:[]
        }
       this.FindFilms=this.FindFilms.bind(this);
    }

    FindFilms() {
   
        if (this.props.selectedActor)
        {
         const searchURL = "https://api.themoviedb.org/3/search/person?api_key=89f44c11b37da1d65d37b97a6bcd5217&query=" + this.props.selectedActor;
            Axios.get(searchURL).then(response => {

                let arrMovies=response.data.results[0].known_for;
                let arrFilms=[];
                arrMovies.forEach(item=>arrFilms.push(new Film(item.title,0,"",item.poster_path,"",item.id)))
                this.setState({ 
                    films:arrFilms.map(item => item)  
                })
                // arrMovies.forEach(item=>this.getFilmParameters(item.title));
            })

            .catch(function (error) {
                    // handle error
                    console.log(error);
            })
            .finally(function () {
                    // always executed
            });
        }

     }

    //  getFilmParameters(filmName)
    //  {

    //     const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=89f44c11b37da1d65d37b97a6bcd5217&query=" + filmName;
    //         Axios.get(searchURL).then(response => {

    //             let arr=response.data;
    //             console.log(arr);
    //         })

    //         .catch(function (error) {
    //                 // handle error
    //                 console.log(error);
    //         })
    //         .finally(function () {
    //                 // always executed
    //         });

    //  }

     
    

    render()
    {
        const {films}=this.state;
        const {selectedActor}= this.props

        this.FindFilms();

        if (films === null || films.length===0) {
            return false;
        }

        var filmsItems=films.map((aFilm,index) => <FilmComponent film={aFilm} index={index}  ></FilmComponent>);
                
        return (
              
            <Container>
                <Jumbotron>{selectedActor}'s movies</Jumbotron>
                <Accordion>
                    {filmsItems}    
                </Accordion>
            </Container>
            
        )
    }
}
