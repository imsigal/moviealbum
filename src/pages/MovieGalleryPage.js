import React, { Component } from 'react';
import Axios from 'axios'
import Movie from '../model/Movie'
import MovieComponent from '../components/MovieComponent'
import './MovieGalleryPage.css';

import {Accordion ,Container} from 'react-bootstrap';


//Component MovieGalleryPage
// the compoment shows an accordion with galley of films.
// the films are of the actor that was passes as propery-selectedActor
// the films data is taken from tmdb database
// prperties :
// -selectedActor- the  actor, of whom the Movies will be seen
// states:
// movies- the list of Movie that will be seen in the accordion
export default class MovieGalleryPage extends Component {

    constructor(props) {
        super(props);
  
        this.state = {
            movies:[]
        }
       this.findMovies=this.findMovies.bind(this);
       this.getMovieParameters=this.getMovieParameters.bind(this);
    }

   
    // find movies for each actor
    findMovies() {
   
        if (this.props.selectedActor)
        {
            let arrMovies=[];
            const searchURL = "https://api.themoviedb.org/3/search/person?api_key=89f44c11b37da1d65d37b97a6bcd5217&query=" + this.props.selectedActor;
            Axios.get(searchURL).then(response => {

                let arrDBMovies=response.data.results[0].known_for;
                this.getMovieParameters(arrDBMovies);   

            })
            .catch(function (error) {
                    // handle error
                    console.log(error);
            })
            .finally(function () {
                   
            });
        }

     }
     // get the crew of each moview and find director and actors
     getMovieParameters(arrDBMovies)
     {
        let arrMovies=[];
      
        const searchURLStart="https://api.themoviedb.org/3/movie/";
        const searchURLEnd="/credits?api_key=89f44c11b37da1d65d37b97a6bcd5217";

        let arr=[];
        for (let i = 0; i < arrDBMovies.length; i++) { 
            let searchURL=searchURLStart+arrDBMovies[i].id+searchURLEnd;
            arr.push(Axios.get(searchURL));
        }
        Axios
        .all(arr)
        .then (Axios.spread((...responses)=>{

                for (let i=0;i<responses.length;i++)
                {
                    // get actors   
                    let actors=[];
                    responses[i].data.cast.forEach(actor=>actors.push(actor.name));
                    // get the directors
                    let directors = [];
                    responses[i].data.crew.forEach(function(entry){
                        if (entry.job === 'Director') {
                            directors.push(entry.name);
                        }
                    })
                    arrMovies.push(new Movie(arrDBMovies[i].title,0,directors.toString(),arrDBMovies[i].poster_path,actors.join(),arrDBMovies[i].id));

                }

                this.setState({
                    movies:arrMovies
                })

        })
        )
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    }

     
    

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
              
            <Container className="movie-gallery-page-main">
                <h1>{headerText}</h1>
                <Accordion defaultActiveKey={0}>
                    {moviesItems}    
                </Accordion>
            </Container>
            
        )
    }
}
