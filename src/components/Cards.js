import React, { Component } from "react";
import './Cards.css'


function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

class Cards extends Component { 
    render() {
        return (
          <div className="card-grid">
            {images.map((image, index) => (
              <img className="card-images" key={index} src={image} alt={`Carousel ${index + 1}`} />
            ))}
          </div>
        );
      }
}

export default Cards