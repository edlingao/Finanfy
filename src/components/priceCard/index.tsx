import React from "react";
import './priceCard.scss';

interface Props {
  name: String,
  quantity: Number,
  yellow?: Boolean,
  fluid?: Boolean,
}

export function PriceCard({ name, quantity, yellow = false, fluid = false }: Props) {

  return (
    <div className={`price-card ${fluid ? 'fluid' : ''}`}>
      <div className={`name ${ !yellow ? 'color-red-background' : 'color-yellow-background'}`}>
        <p className="font-size-regular color-white-font">
          { name }
        </p>
      </div>
      <div className="quantity color-light-yellow-background">
        <p className="font-size-regular color-black-font">
          { quantity }
        </p>
      </div>
    </div>
  )
}
