import React, { useState } from "react";

export default function GourmetItem(props) {
    const [total, setTotal] = useState(0);

    function handleQuantityChange(event) {
        const newQuantity = event.target.value;
        const newTotal = newQuantity * 3;
        setTotal(newTotal);
    }

    return (
        <div>
            <div className="relative top-10">
                <h2 className="text-xl">Sacolé Gourmet</h2>
                <p className="text-6xl">R${total},00</p>
            </div>
            <label className="relative top-20 text-2xl">
                Quantidade:
                <input
                    className="w-14 text-center"
                    type="number"
                    min="0"
                    max="10"
                    value={props.quantity}
                    onChange={handleQuantityChange}
                />
            </label>
        </div>
    );
}
