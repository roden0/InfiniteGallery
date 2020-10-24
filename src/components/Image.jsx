import React from 'react';
import '../styles/Images.scss';

export function Image({imageData}){
    
    return(
        <div className="image__container">
            <picture>
                <source media="(max-width: 799px)" srcSet={imageData.urls.thumb}></source>
                <source media="(min-width: 800px)" srcSet={imageData.urls.small}></source>
                <img className="image__picture" loading="lazy" src={imageData.urls.regular} alt={imageData.alt_description || imageData.description} />
            </picture>
            <span className="image__overlay">
                {imageData.description || 'No image desciption'}
            </span>
        </div>
        
    )
}