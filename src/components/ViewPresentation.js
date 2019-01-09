import React from 'react';
import Articles from './Articles';


const ViewPresentation = (props) => {
    const presentation = props.getPresentation(props.match.params.id);
    const {_id, presenter, evaluater, topic, articles, date, keywords, summary} = presentation.data; 
    return (
        <div className="view-wrapper">
            <div><h1>{topic}</h1></div>
            <div>keywords: {keywords}</div>
            <div>{date}</div> 
            <div><div>{presenter}</div><div>{evaluater}</div></div>
            <div>{summary}</div> 
            <Articles articlesURL={articles}/>
        </div>
    )
}

export default ViewPresentation;