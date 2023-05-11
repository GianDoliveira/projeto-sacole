import React, { useState } from "react";

export default function GourmetItem(props) {
  const [total, setTotal] = useState(0);
  const [exceededLimit, setExceededLimit] = useState(false);

  function handleQuantityChange(event) {
    let newQuantity = event.target.value;

    if (newQuantity > 100) {
      newQuantity = 100;
      setExceededLimit(true);
    } else {
      setExceededLimit(false);
    }

    const newTotal = newQuantity * 3;
    setTotal(newTotal);
  }

  return (
    <div>
      <div className="relative top-10">
        <h2 className="text-xl">Sacolé Gourmet</h2>
        <p className="text-6xl">R${total},00</p>
      </div>
      <label className="relative top-28 text-2xl">
        Quantidade:
        <input
          className="w-14 text-center outline-none"
          type="number"
          min="0"
          max="100"
          value={props.quantity}
          onChange={handleQuantityChange}
        />
      </label>

      {exceededLimit && (
        <p className="text-red-500 relative top-5">Você atingiu o limite máximo de 100 unidades!</p>
      )}
    </div>
  );
}
