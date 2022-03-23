import { Checkbox } from "components/checkbox";
import React from "react";
import './expenseCard.scss';

interface Props {
  name: String,
  payStatus?: Boolean,
  quantity: number,
  date: String,
  onChanged?(): void,
  onExpired?(): void
}

export function ExpenseCard({
  name,
  payStatus = false,
  quantity,
  date,
  onChanged = () => null,
  onExpired = () => null
}: Props) {
  return (
    <div className="expense-card">
      <div className="expense-header color-blue-background color-white-font">
        <div className="name-section">
          <p className="font-size-regular color-white-font">{ name }</p>
        </div>
        <div className="pay-state">
          <p className="pay-message font-size-regular color-white-font">Pagado</p>
          <Checkbox />
        </div>
      </div>
      <div className="expense-mid color-light-yellow-background color-black-font">
        <p className="quantity-square font-size-atom">Cantidad</p>
        <p className="date-square font-size-atom">Fecha</p>
      </div>
      <div className="expense-footer">
        <div className="quantity-square color-yellow-background">
          <p className="quantity-number font-size-hercules">{ quantity }</p>
        </div>
        <div className="date-square color-blue-background">
          <p className="date-string color-white-font font-size-hercules">{ date }</p>
        </div>
      </div>
    </div>
  )
}
