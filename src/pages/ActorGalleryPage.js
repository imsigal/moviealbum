
import React, { Component } from 'react';
 
import Actor from '../model/Actor'
import ActorComponent from '../components/ActorComponent'
import ActorsData from "../data/actors.json"
import FilterBoxComponent from '../components/FilterBoxComponent'

import {Row, Col,Form } from 'react-bootstrap';
import './ActorGalleryPage.css';
//Component ActorGalleryComponent
// the compoment shows a gallery of actors.
// the actors can be searched according tp the text appear in the search box.
// to activate the search , one must click the search buttom
// the search is done to the displayed items.
//this means that once search is done and than another search , the second is done within the first item results
// to clean the search press search button to empty search box text
// search is not sensitive to case
// properties:
// -onSelectedActor: get the actor name from the child actor item
// state:
//- actors: the list of actors that appear on screen. this is initialize from the actors data
// - filterCreteria : the creteria of the filter, that will appear in the text box
export default class ActorGalleryComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            actors:ActorsData.map(item => new Actor(item)), 
            filterCreteria:""
        }
        this.filterActors=this.filterActors.bind(this);
        this.selectActor=this.selectActor.bind(this);
    }
    // filterActors function does the filter algorithm
    filterActors(filterText) 
    {
        const {actors}=this.state;
        if (filterText === "") {
            // no need to filter, read all the data 
             this.setState({
                actors:ActorsData.map(item => new Actor(item))      
             })
             this.setState({
                filterCreteria:filterText
             })
        } 
        else  // filter according to the text in the search box
        {
                // divide the original string to words and test the exsistance of each word in the name
            var searchArray=filterText.toLowerCase().split(" ");
            // copy the original array to other array
            let filteredList=actors.slice();
            // filter into the other array
            for (var i=0;i<searchArray.length;++i)
            {
                filteredList = filteredList.filter((anActor => anActor.firstName.toLowerCase().includes((searchArray[i]) )||(anActor.lastName.toLowerCase().includes(searchArray[i]))));
                
            }
            // set the new array to actors list
            // if the list is empty the filter will not show anything.
            this.setState({
                actors:filteredList.map(item => new Actor(item))
            })
            
            // add the filter to the previous
            let filter=searchArray.concat(this.state.filterCreteria.split(" "));
            let uniquefilter  = [...new Set(filter)];  // remove doubles
            this.setState({
                filterCreteria:uniquefilter.join(" ")
            })
            
        }
    }


    selectActor(actorName)
    {  
        this.props.onSelectActor(actorName);
    }
    render()
    {
        const {actors,filterCreteria}=this.state;

        if (actors === null) {
            return false;
        }

            var actorsItems=actors.map((anActor,index) => 
            <Col className="gallery-item" md={3} key={index}>
                <ActorComponent actor={anActor} onSelectedActor={this.selectActor} ></ActorComponent>
            </Col>)
                
        var filterCreteriaText=(filterCreteria==="")?"Filter creteria: none":"Filter creteria: "+ filterCreteria;

        return (
                   
            <div className="actor-gallery-page" >
                <FilterBoxComponent  onFilterChange={this.filterActors}></FilterBoxComponent>     
                <Form.Group as={Row} className="filter-results" >
                    <Form.Control plaintext readOnly disabled  value={filterCreteriaText}/>
                </Form.Group>
                <Row >             
                        {actorsItems}           
                </Row>
            </div>
            
        )
    }
}

