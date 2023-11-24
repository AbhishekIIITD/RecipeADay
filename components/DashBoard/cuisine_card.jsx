import React from 'react'
import image from "./food.jpg"


export const Cuisine_card = (props) => {
  return (
    <div className="Cuisinecard">
          <img src={image} />
          <div className="Cuisinecard-body">
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>{props.author}</h5>
          </div>
        </div>
  )
}
