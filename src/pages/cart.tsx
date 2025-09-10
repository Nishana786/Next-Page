"use client";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "@/redux/cartSlice";

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-10 drop-shadow-sm">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-2xl p-4 border border-orange-100"
              >
                {/* ✅ NEXT Image Used */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={96}
                  height={96}
                  className="w-24 h-24 object-contain rounded-lg shadow"
                />

                <div className="flex-1 text-center md:text-left px-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="px-3 py-1 bg-orange-200 rounded-lg hover:bg-orange-300"
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="px-3 py-1 bg-orange-200 rounded-lg hover:bg-orange-300"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="text-right text-xl font-bold text-orange-700">
              Total: ${total.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
