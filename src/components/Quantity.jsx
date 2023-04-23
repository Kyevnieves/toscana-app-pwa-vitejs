import { useState } from "react";

export function Quantity() {
  let [quantity, setQuantity] = useState(1);
  const sumar = () => {
    setQuantity(quantity + 1);
  };
  const restar = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className='flex justify-between py-2'>
      <button className='text-red-400 font-bold px-4 py-2' onClick={restar}>
        -
      </button>
      <h2 className='text-red-400 font-bold my-2' data-name='counter'>
        {quantity}
      </h2>
      <button className='text-red-400 font-bold p-2 px-4 py-2' onClick={sumar}>
        +
      </button>
    </div>
  );
}
