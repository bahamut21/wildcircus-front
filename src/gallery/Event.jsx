import React from 'react';
import './Event.scss';

function Event({ event: { name, city, date, picture1, picture2, picture3, picture4, picture5 }}) {
  
  return (
    <div className="Event row">
      <div className="col-4">
        <div>
          <h3>{name}</h3>
          <span>{city}</span>
          <span>{date}</span>
        </div>
        <div>
          <img src={picture1} alt={`event from ${city}`} />
        </div>
      </div>
      <div className="col-8 mt-auto">
        <img src={picture2} alt={`event from ${city}`} />
        <img src={picture3} alt={`event from ${city}`} />
        <img src={picture4} alt={`event from ${city}`} />
        <img src={picture5} alt={`event from ${city}`} />
        </div>
    </div>
  );
}

export default Event;
