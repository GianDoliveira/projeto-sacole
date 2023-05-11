import React, { useState } from "react";

export default function CommonItem(props) {
    const [total, setTotal] = useState(0);

    function handleQuantityChange(event) {
        const newQuantity = event.target.value;
        const newTotal = newQuantity * 2;
        setTotal(newTotal);
    }

    function handleKeyDown (e) {
        e.preventDefault();
    }

    return (
        <div>
            <div className="relative top-10">
                <h2 className="text-xl">Sacolé Comum</h2>
                <p className="text-6xl">R${total},00</p>
            </div>
            <label className="relative top-20 text-2xl">
                Quantidade:
                <input
                    className="w-14 text-center caret-transparent outline-none"
                    type="number"
                    min="0"
                    max="100"
                    value={props.quantity}
                    onChange={handleQuantityChange}
                    onKeyDown={handleKeyDown}
                />
            </label>
        </div>
    );
}
