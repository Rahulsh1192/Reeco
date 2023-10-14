import { createSlice } from "@reduxjs/toolkit";

export const OrderSlice = createSlice({
  name: "order",
  initialState: [],

  reducers: {
    addOrder: (state, action) => {
      debugger;
      console.log(action);
      state = [...action.payload];
      return state;
    },
    approveOrder: (state, action) => {
      console.log(action);
      return [...state].map((ele) => {
        return ele._id == action.payload.data._id
          ? { ...ele, status: action.payload.actionType }
          : { ...ele };
      });
    },
    approveAll: (state) => {
      return [...state].map((ele) => {
        return { ...ele, status: "Approved" };
      });
      console.log(state);
    },
  },
});

export const { addOrder, approveOrder, approveAll } = OrderSlice.actions;

export default OrderSlice.reducer;
