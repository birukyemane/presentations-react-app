import React from 'react';
import Presentation from './Presentation';
import { NavLink } from 'react-router-dom';

const ListPresentations = (props) => {
    const displaypresentations = props.presentations.map((presentation,index)=>{        
        return <Presentation key={index + 1} presentation={presentation} />;
    });
    
    return (
        <div>
            <div className="navWrapper">     
               <NavLink to='/presentations/newPresentation' className="whiteFont blueBackground">Add Presentation</NavLink>
            </div> 
            <div className="presentation">
                <div className="presentationInfo presentationInfo-title">Presenter</div>  
                <div className="presentationInfo presentationInfo-title">Evaluater</div> 
                <div className="presentationInfo presentationInfo-title">Topic</div> 
                <div className="presentationInfo presentationInfo-title">Articles</div> 
                <div className="presentationInfo presentationInfo-title">Date</div> 
            </div>
            {displaypresentations}
        </div>
    )
}

export default ListPresentations;