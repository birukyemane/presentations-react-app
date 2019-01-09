import React from 'react';
import {getDateString} from '../utils/general.js';
import Articles from './Articles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';

const Presentation = (props) => {
    const {_id, presenter, evaluater, topic, articles, date} = props.presentation;
    
    return (
        <div className="presentation">
            <div className="presentationInfo">{presenter}</div>  
            <div className="presentationInfo">{evaluater}</div> 
            <div className="presentationInfo">{topic}</div> 
            <div className="presentationInfo"><Articles articlesURL={articles}/></div> 
            <div className="presentationInfo">{getDateString(new Date(date))}</div> 
            <div className="presentationInfo">
                <FontAwesomeIcon icon="trash" size="lg" onClick={() => props.deletePresentation(_id, props.presentationIndex)}/>
                <FontAwesomeIcon icon="edit" size="lg"/>   
                <NavLink to={`/presentations/view/${_id}`}>View</NavLink>
            </div>
         </div>
    )
}

export default Presentation;