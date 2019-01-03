import React from 'react';

const Articles = (props) => {
    const articlesURL = props.articlesURL.split(','); // URLs to articles 
    const ariclesLinks = articlesURL.map((article,index)=>{
        return <li key={index + 1}><a href={article}>Article link {index +1}</a></li>
    });
    return (
        <ul className="articlesLinks">
           {ariclesLinks}
        </ul>
    ) 
}

export default Articles;