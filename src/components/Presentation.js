import React from 'react';

const Presentation = (props) => {
    const {presenter, evaluater, topic, articles, date} = props.presentation;
    return (
        <div className="presentation">
            <div className="presentationInfo">{presenter}</div>  
            <div className="presentationInfo">{evaluater}</div> 
            <div className="presentationInfo">{topic}</div> 
            <div className="presentationInfo">{articles}</div> 
            <div className="presentationInfo">{date}</div> 
         </div>
    )
}

export default Presentation;