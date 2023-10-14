import { configureStore } from "@reduxjs/toolkit";
import OrderReducer from "../features/Order/OrderSlice";
import headerReducer from "../features/Header/HeaderSlice";
export default configureStore({
  reducer: {
    order: OrderReducer,
    header: headerReducer,
  },
});
