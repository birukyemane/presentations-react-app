import React from 'react';
import {getDateString} from '../utils/general.js';
import Articles from './Articles'

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
                <button onClick={() => props.deletePresentation(_id, props.presentationIndex)}>Delete</button>
            </div>
         </div>
    )
}

export default Presentation;