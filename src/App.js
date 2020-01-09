// import React from 'react';
import React, { Component } from 'react';
import { Switch, Route,HashRouter  } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import ActorGalleryPage from './pages/ActorGalleryPage';
import MovieGalleryPage from './pages/MovieGalleryPage';



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
        <HashRouter>
          <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/actors">
                <ActorGalleryPage onSelectActor={this.selectActor}></ActorGalleryPage>
              </Route>
              <Route exact path="/movies">
                <MovieGalleryPage selectedActor={this.state.selectedActor}></MovieGalleryPage>
              </Route>
          </Switch>
        </HashRouter>
      
      );
    }
  }

export default App;
