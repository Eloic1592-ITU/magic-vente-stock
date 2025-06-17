import { useState } from "react";

function Basket() {
  const [quantity, setQuantity] = useState(0);

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(0, prev - 1));
  };
  return (
    <div>
      {/* product image */}
      {/* basket*/}
      <div className="space-x-5">
        <button
          type="submit"
          className="mt-4 bg-[#3c2e1e] text-[#f6c669] font-semibold px-4 py-2 hover:cursor-pointer"
          style={{ fontFamily: "Inknut Antiqua, serif" }}
          onClick={decrementQuantity}
        >
          -
        </button>
        <input
          type="text"
          value={quantity}
          className="border w-16 text-center border-[#b98d44] bg-[#e7e3d9] p-2"
        />
        <button
          type="submit"
          className="mt-4 bg-[#3c2e1e] text-[#f6c669] font-semibold px-4 py-2 hover:cursor-pointer"
          style={{ fontFamily: "Inknut Antiqua, serif" }}
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      <button
        type="submit"
        className="mt-4 bg-[#3c2e1e] text-[#f6c669]  px-4 py-2 hover:cursor-pointer"
        style={{ fontFamily: "Inknut Antiqua, serif" }}
      >
        Ajouter au panier
      </button>
    </div>
  );
}

export default Basket;
