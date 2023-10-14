import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

const headerSlice = createSlice({
  name: "Header",
  initialState,
  reducers: {
    setOpen(state) {
      state.value = true;
    },
    closeSidebar(state) {
      state.value = false;
    },
  },
});

export const { setOpen, closeSidebar } = headerSlice.actions;
export default headerSlice.reducer;
