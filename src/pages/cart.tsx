import React from "react";
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
          🛒 Your Cart
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
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain rounded-lg shadow"
                />
                <div className="flex-1 px-4 text-center md:text-left">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-500">${item.price}</p>
                </div>

                {/* Quantity controls */}
                <div className="flex items-center gap-3 mt-4 md:mt-0">
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="ml-4 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow-md mt-4 md:mt-0"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total + Checkout */}
            <div className="text-right mt-10">
              <h2 className="text-2xl font-bold text-gray-800">
                Total: <span className="text-orange-600">${total.toFixed(2)}</span>
              </h2>
              <button className="mt-6 bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition shadow-md">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
