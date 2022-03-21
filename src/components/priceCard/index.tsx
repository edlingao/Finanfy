import React from "react";
import './priceCard.scss';

interface Props {
  name: String,
  quantity: Number,
}

export function PriceCard({ name, quantity }: Props) {

  return (
    <div className="price-card">
      <div className="name color-red-background">
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
