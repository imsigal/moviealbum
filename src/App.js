// import React from 'react';
import React, { Component } from 'react';
import { Switch, Route,HashRouter  } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
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
        <HashRouter>
          <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/actors">
                <ActorGalleryPage onSelectActor={this.selectActor}></ActorGalleryPage>
              </Route>
              <Route exact path="/movies">
                <FilmGalleryComponent selectedActor={this.state.selectedActor}></FilmGalleryComponent>
              </Route>
          </Switch>
        </HashRouter>
      
      );
    }
  }

export default App;
