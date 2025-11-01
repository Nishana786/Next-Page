import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) item.quantity += 1;
      else state.items.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
