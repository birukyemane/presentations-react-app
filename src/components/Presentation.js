import React from 'react';
import {convertDateFormat} from '../utils/general.js'
import {getDateString} from '../utils/general.js'


const Presentation = (props) => {
    const {presenter, evaluater, topic, articles, date} = props.presentation;
    return (
        <div className="presentation">
            <div className="presentationInfo">{presenter}</div>  
            <div className="presentationInfo">{evaluater}</div> 
            <div className="presentationInfo">{topic}</div> 
            <div className="presentationInfo">{articles}</div> 
            <div className="presentationInfo">{getDateString(new Date(date))}</div> 
            <div>Delete</div>
         </div>
    )
}

export default Presentation;