import React from 'react';
import Card from './Card';

const CardList = ({ planets }) =>{
    return (
        <div>
            {
                planets.map((planet, i) => {
                    return( <Card key={planets[i].name}
                            climate={planets[i].climate}
                            name={planets[i].name}
                            terrain={planets[i].terrain}
                            />)
                })
            }
        </div>
    )
}

export default CardList;