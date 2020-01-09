import React, { Component } from 'react';
import Axios from 'axios'
import Movie from '../model/Movie'
import MovieComponent from '../components/MovieComponent'


import {Accordion ,Container, Jumbotron} from 'react-bootstrap';

// prperties :
// -selectedActor- the  actor, of whom the Movies will be seen
// states:
// movies- the list of Movie that will be seen on screen
export default class MovieGalleryPage extends Component {

    constructor(props) {
        super(props);
  
        this.state = {
            movies:[]
        }
       this.findMovies=this.findMovies.bind(this);
    }

    findMovies() {
   
        if (this.props.selectedActor)
        {
         const searchURL = "https://api.themoviedb.org/3/search/person?api_key=89f44c11b37da1d65d37b97a6bcd5217&query=" + this.props.selectedActor;
            Axios.get(searchURL).then(response => {

                let arrDBMovies=response.data.results[0].known_for;
                let arrMovies=[];
                arrDBMovies.forEach(item=>arrMovies.push(new Movie(item.title,0,"",item.poster_path,"",item.id)))
                this.setState({ 
                    movies:arrMovies.map(item => item)  
                })
                // arrMovies.forEach(item=>this.getMovieParameters(item.title));
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

    //  getMovieParameters(movieName)
    //  {

    //     const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=89f44c11b37da1d65d37b97a6bcd5217&query=" + movieName;
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
        const {movies}=this.state;
        const {selectedActor}= this.props

        this.findMovies();

        if (movies === null || movies.length===0) {
            return false;
        }

        var moviesItems=movies.map((aMovie,index) => <MovieComponent movie={aMovie} index={index}  ></MovieComponent>);
        var headerText=(selectedActor)? selectedActor+"'s movies": "Cannot show movies,No Actor was selected"       
        return (
              
            <Container>
                <Jumbotron>{headerText}</Jumbotron>
                <Accordion>
                    {moviesItems}    
                </Accordion>
            </Container>
            
        )
    }
}
