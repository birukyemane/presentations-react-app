import React from 'react';
import {Route} from "react-router-dom";
import AddPresentation from './AddPresentation';
import ListPresentations from './ListPresentations';
import ViewPresentation from './ViewPresentation';


const Presentaions = (props) => {
    const {presentations, addPresentation, deletePresentation, getPresentation} = props;
    return (
        <div className="presentations-wrapper">
            <Route exact path='/presentations'  render={(props) => <ListPresentations {...props} presentations={presentations} deletePresentation={deletePresentation}/>}/>
            <Route exact path='/presentations/newPresentation' render={(props) => <AddPresentation {...props} addPresentation={addPresentation}/>}/>
            <Route exact path='/presentations/view/:id' render={(props) => <ViewPresentation {...props} getPresentation={getPresentation}/>}/>
        </div>
    )
}

export default Presentaions;