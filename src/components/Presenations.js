import React from 'react';
import { Route } from "react-router-dom";
import AddPresentation from './AddPresentation';
import ListPresentations from './ListPresentations';



const Presentaions = (props) => {

    const {presentations, addPresentation, deletePresentation} = props;
    return (
        <div className="presentations-wrapper">
            <Route exact path='/presentations'  render={(props) => <ListPresentations {...props} presentations={presentations} deletePresentation={deletePresentation}/>}/>
            <Route exact path='/presentations/newPresentation' render={(props) => <AddPresentation {...props} addPresentation={addPresentation}/>}/>
        </div>
    )
}

export default Presentaions;