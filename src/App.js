// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import ActorGalleryPage from './pages/ActorGalleryPage';
import FilmGalleryComponent from './components/FilmGalleryComponent';



  class App extends Component
  {
      constructor(props) {
        super(props);      
    
      this.state = {
      selectedActor:""
      }

    }
    selectActor=(actorName)=>
    {
      this.setState({
        selectedActor:actorName
      })
    }

    render()
    {
      return (
        <div>
        <ActorGalleryPage onSelectActor={this.selectActor}></ActorGalleryPage>
        <FilmGalleryComponent selectedActor={this.state.selectedActor}></FilmGalleryComponent>
        </div>
      
      );
    }
  }

export default App;
