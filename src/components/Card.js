import React from 'react';

const Card = ({climate, name, terrain}) => {
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <h2>{name}</h2>
            <p><b>Climate:</b> {climate}</p>
            <p><b>Terrain:</b> {terrain}</p>
            
        </div>
    )
}

export default Card;