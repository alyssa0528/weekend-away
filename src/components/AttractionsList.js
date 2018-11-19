//this file is responsible for presenting the list of attractions
//props come down from AttractionsContainer

import React from 'react';

const AttractionsList = (props) => {
  if (props.attractions) {
    return (
      <div>
        <h2>Attractions</h2>
        {props.attractions.map(attraction =>
          <div>
            <h3>Name: {attraction.name}</h3>
            <p>Location: {attraction.street_address}, {attraction.city}</p>
          </div>)}
      </div>
    )
  }

}


export default AttractionsList;
