

import React, { Component } from 'react'
import { FormControl, InputGroup,Button } from 'react-bootstrap';


//FilterBoxComponent
// this item sends to the parent a string when ok button is pressed
// props:
//- onFilterChange- a function name that should be implemented in the parent and accept the string (filterText)
// the function is operated on the click of the search button
// State:
// -filterText-a string that containn the text in the textBox
 class FilterBoxComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: ""
        }

    }

    
    handleInputChange=(event)=> {
        const newFilterText = event.target.value
        this.setState({
            filterText: newFilterText
        });
    }

    handleFilter=(event)=>{    
        this.props.onFilterChange(this.state.filterText);
    }


    render() {
        const { filterText } = this.state;
        
    
        return (
          
               <div>
                 <InputGroup className="mb-3" size="lg">
                    <FormControl
                        placeholder="search for..."
                        aria-label="search for..."
                        aria-describedby="basic-addon2"
                        value={filterText} 
                         onChange={this.handleInputChange}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary"  onClick={this.handleFilter}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }
}

export default FilterBoxComponent;