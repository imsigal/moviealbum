import React, { Component } from 'react';
import { Container,Image } from 'react-bootstrap';
import imageSource from '../images/movies-1167319_640.jpg'
import './HomePage.css';
import { Redirect } from 'react-router-dom';

//Component HomePage
// the home pages of the application

export default class HomePage extends Component
  {

    constructor(props) {
      super(props); 
      this.state = {
        IsRedirectToActorsPage:false
      }   
  }

    onImageClick=()=>{
      this.setState({IsRedirectToActorsPage:true});

    }

      
    render()
    {
      if (this.state.IsRedirectToActorsPage)
      {     
        return (<Redirect to="/Actors"/>);
      }
        
      return (
            <Container className="home-page-main">
              <h1>Welcome to actors data album</h1>
              <Image src={imageSource} roundedCircle onClick={this.onImageClick} ></Image>   
              <h3>
                  <a href="#/actors"> press to enter</a>   
              </h3>
            </Container>
       
      
      );
    }
  }
